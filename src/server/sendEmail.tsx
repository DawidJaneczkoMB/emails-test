import { createServerFn } from "@tanstack/react-start";
import { checkAPIKey } from "@/utils/checkAPIKey";
import { getPreview } from "./getPreview";
import { env } from "@/env";
import nodemailer from "nodemailer";

export const sendEmail = createServerFn()
  .inputValidator(
    ({ templateName, variant, recipientEmail, apiKey }) => ({
      templateName: String(templateName),
      variant: String(variant),
      recipientEmail: String(recipientEmail),
      apiKey: String(apiKey),
    })
  )
  .handler(async ({ data }) => {
    const { templateName, variant, recipientEmail, apiKey } = data;

    // Validate API key
    try {
      checkAPIKey(apiKey);
    } catch (error) {
      throw new Error("Invalid API key");
    }

    // Get email content
    const preview = await getPreview({
      data: { templateName, variant },
    });

    if (!preview) {
      throw new Error(`Template not found: ${templateName}/${variant}`);
    }    

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
        html: preview.html,
        text: preview.plainText,
      });

      console.log(
        `✅ Email sent for ${templateName}/${variant} to ${recipientEmail}`
      );

      return {
        success: true,
        message: `Email sent to ${recipientEmail}`,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error(
        `❌ Failed to send ${templateName}/${variant}: ${errorMessage}`
      );
      throw new Error(`Failed to send email: ${errorMessage}`);
    }
  });
