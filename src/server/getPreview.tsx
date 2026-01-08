import { createServerFn } from "@tanstack/react-start";
import { getPreviewModule } from "../utils/emailLoader";
import type { ComponentType } from "react";
import { render, pretty, toPlainText } from "@react-email/render";

export const getPreview = createServerFn()
  .inputValidator(
    ({ templateName, variant }): { templateName: string; variant: string } => {
      return {
        templateName,
        variant,
      };
    }
  )
  .handler(async ({ data }) => {
    const { templateName, variant } = data;

    const importFn = getPreviewModule(templateName);
    if (!templateName || !importFn) return null;
    const mod = (await importFn()) as {
      [key: string]: ComponentType<any>;
    };
    const Preview = mod[variant];
    if (!Preview) return null;

    const html = await render(<Preview />);

    const prettyHtml = await pretty(html);

    const plainText = await toPlainText(html);

    return {
      html,
      prettyHtml,
      plainText,
    };
  });
