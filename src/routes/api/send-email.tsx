import { render, toPlainText } from "@react-email/render";
import { createFileRoute } from "@tanstack/react-router";
import { apiMiddleware } from "@/middleware/api";
import { parseRequestBody, loadTemplate } from "./-utils";
import { env } from "@/env";
import nodemailer from "nodemailer";

export const Route = createFileRoute("/api/send-email")({
  server: {
    middleware: [apiMiddleware],
    handlers: {
      POST: async ({ request }) => {
        let body: {
          templateName?: string;
          props?: any;
          recipientEmail?: string;
        };

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

        const { templateName, props, recipientEmail } = body;

        if (!templateName) {
          return Response.json(
            { error: "templateName is required" },
            { status: 400 }
          );
        }

        if (!recipientEmail) {
          return Response.json(
            { error: "recipientEmail is required" },
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

        // Create nodemailer transporter
        const transporter = nodemailer.createTransport({
          host: env.SMTP_HOST,
          port: env.SMTP_PORT,
          secure: env.SMTP_SECURE,
          pool: true,
          auth: {
            user: env.SMTP_USERNAME,
            pass: env.SMTP_PASSWORD,
          },
        });

        try {
          // Send email
          await transporter.sendMail({
            from: {
              name: env.EMAIL_FROM_NAME,
              address: env.EMAIL_FROM_ADDRESS,
            },
            to: recipientEmail,
            subject: `Email Renderer Test - ${templateName}`,
            html,
            text: plainText,
          });

          return Response.json({
            success: true,
            message: `Email sent to ${recipientEmail}`,
          });
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
          return Response.json(
            { error: `Failed to send email: ${errorMessage}` },
            { status: 500 }
          );
        }
      },
    },
  },
});
