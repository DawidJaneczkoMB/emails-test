import { createFileRoute, redirect } from "@tanstack/react-router";
import { previewModules } from "@/utils/emailLoader";

/**
 * This route is used to redirect to the first template and variant
 */

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    // Get the first template name from preview modules
    const previewPaths = Object.keys(previewModules);
    if (previewPaths.length === 0) {
      return;
    }

    // Extract template name from path (e.g., "../previews/MyEmail.tsx" -> "MyEmail")
    const firstTemplatePath = previewPaths[0];
    const templateName = firstTemplatePath
      .replace(/^.*\/previews\//, "")
      .replace(/\.tsx$/, "");

    // Load the preview module to get available variants
    const importFn = previewModules[firstTemplatePath];
    if (!importFn) {
      return;
    }

    const mod = (await importFn()) as Record<string, unknown>;
    // Get the first exported function (variant) from the module
    const variantNames = Object.keys(mod).filter(
      (key) => typeof mod[key] === "function"
    );

    if (variantNames.length === 0) {
      return;
    }

    const firstVariant = variantNames[0];

    // Redirect to the first template and variant
    throw redirect({
      to: "/previews/$templateName/$variant",
      params: {
        templateName,
        variant: firstVariant,
      },
    });
  },
  component: App,
});

function App() {
  return <div />;
}
