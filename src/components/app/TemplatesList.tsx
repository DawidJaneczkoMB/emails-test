import { TemplateItem } from "./TemplateItem";

type Template = {
  name: string;
  variants: string[];
};

type TemplatesListProps = {
  templates: Template[];
};

export function TemplatesList({ templates }: TemplatesListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {templates.map((template) => (
        <TemplateItem key={template.name} template={template} />
      ))}
    </div>
  );
}
