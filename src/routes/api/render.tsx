import { render, toPlainText } from "@react-email/render";
import { createFileRoute } from "@tanstack/react-router";
import { apiMiddleware } from "@/middleware/api";
import { parseRequestBody, loadTemplate } from "./-utils";

export const Route = createFileRoute("/api/render")({
  server: {
    middleware: [apiMiddleware],
    handlers: {
      POST: async ({ request }) => {
        let body: { templateName?: string; props?: any };

        try {
          const parsed = await parseRequestBody(request);
          if (!parsed) {
            return Response.json(
              { error: "Request body is required" },
              { status: 400 }
            );
          }
          body = parsed;
        } catch (error) {
          return Response.json(
            {
              error:
                error instanceof Error
                  ? error.message
                  : "Invalid JSON in request body",
            },
            { status: 400 }
          );
        }

        const { templateName, props } = body;

        if (!templateName) {
          return Response.json(
            { error: "templateName is required" },
            { status: 400 }
          );
        }

        const Template = await loadTemplate(templateName);

        if (!Template) {
          return Response.json(
            { error: `Template not found: ${templateName}` },
            { status: 404 }
          );
        }

        const html = await render(<Template {...(props || {})} />);
        const plainText = await toPlainText(html);

        return new Response(JSON.stringify({ html, plainText }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
