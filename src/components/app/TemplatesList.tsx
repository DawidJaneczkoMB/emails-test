import { TemplateItem } from "./TemplateItem";

type Template = {
  name: string;
  variants: string[];
};

type TemplatesListProps = {
  templates: Template[];
};

export function TemplatesList({ templates }: TemplatesListProps) {
  const sortedTemplates = [...templates].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="flex-1 overflow-y-auto">
      {sortedTemplates.map((template) => (
        <TemplateItem key={template.name} template={template} />
      ))}
    </div>
  );
}
