import { createServerFn } from "@tanstack/react-start";
import { previewModules } from "@/utils/emailLoader";

type TemplateInfo = {
  name: string;
  variants: string[];
};

export const loadTemplates = createServerFn().handler(async () => {
  const templates: TemplateInfo[] = [];

  for (const [path, importFn] of Object.entries(previewModules)) {
    const templateName = path
      .replace(/^.*\/previews\//, "")
      .replace(/\.tsx$/, "");

    try {
      const mod = (await importFn()) as Record<string, unknown>;
      const variantNames = Object.keys(mod).filter(
        (key) => typeof mod[key] === "function"
      );

      if (variantNames.length > 0) {
        templates.push({
          name: templateName,
          variants: variantNames.sort(),
        });
      }
    } catch (error) {
      console.error(`Failed to load template ${templateName}:`, error);
    }
  }

  return templates.sort((a, b) => a.name.localeCompare(b.name));
});
