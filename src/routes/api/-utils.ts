import { getTemplateModule } from "@/utils/emailLoader";
import type { ComponentType } from "react";

export async function parseRequestBody(request: Request) {
  const contentLength = request.headers.get("content-length");

  if (!contentLength || parseInt(contentLength) === 0) {
    return null;
  }

  try {
    return await request.json();
  } catch (error) {
    throw new Error("Invalid JSON in request body");
  }
}

export async function loadTemplate(templateName: string) {
  const importFn = getTemplateModule(templateName);

  if (!templateName || !importFn) {
    return null;
  }

  const mod = (await importFn()) as {
    default?: ComponentType<any>;
    [key: string]: any;
  };

  // Templates use default export
  const Template = mod.default || mod[templateName];

  if (!Template) {
    return null;
  }

  return Template;
}
