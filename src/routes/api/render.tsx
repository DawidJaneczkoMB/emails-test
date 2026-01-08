import { render, toPlainText } from "@react-email/render";
import { getTemplateModule } from "../../utils/emailLoader";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentType } from "react";

export const Route = createFileRoute("/api/render")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentLength = request.headers.get("content-length");

        let body: { templateName?: string; props?: any } = {};
        if (contentLength && parseInt(contentLength) > 0) {
          try {
            body = await request.json();
          } catch (error) {
            return Response.json(
              { error: "Invalid JSON in request body" },
              { status: 400 }
            );
          }
        } else {
          return Response.json(
            { error: "Request body is required" },
            { status: 400 }
          );
        }

        const { templateName, props } = body;

        const importFn = getTemplateModule(templateName);

        if (!templateName || !importFn) {
          return Response.json(
            { error: `Template not found: ${templateName}` },
            { status: 404 }
          );
        }

        // Call the import function from the glob
        const mod = (await importFn()) as {
          default?: ComponentType<any>;
          [key: string]: any;
        };
        // Templates use default export
        const Template = mod.default || mod[templateName];

        if (!Template) {
          return Response.json(
            { error: `Template not found: ${templateName}` },
            { status: 404 }
          );
        }

        const html = await render(<Template {...props} />);
        const plainText = await toPlainText(html);

        return new Response(JSON.stringify({ html, plainText }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
