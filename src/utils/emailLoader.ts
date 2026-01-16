export const templateModules = import.meta.glob("../templates/*.tsx");
export const previewModules = import.meta.glob("../previews/*.tsx");

function resolveTemplatePath(templateName: string) {
  return Object.keys(templateModules).find((path) =>
    path.endsWith(`/${templateName}.tsx`) || path.endsWith(`\\${templateName}.tsx`)
  );
}

export function getTemplateModule(templateName: string | undefined) {
  if (!templateName) {
    return null;
  }
  const filepath = resolveTemplatePath(templateName);
  if (!filepath || !templateModules[filepath]) {
    return null;
  }
  return templateModules[filepath];
}

function resolvePreviewPath(previewName: string) {
  return Object.keys(previewModules).find((path) =>
    path.endsWith(`/${previewName}.tsx`) || path.endsWith(`\\${previewName}.tsx`)
  );
}

export function getPreviewModule(previewName: string | undefined) {
  if (!previewName) {
    return null;
  }
  const filepath = resolvePreviewPath(previewName);
  if (!filepath || !previewModules[filepath]) {
    return null;
  }
  return previewModules[filepath];
}
