import { cn } from "@/utils/cn";
import { Link, useParams } from "@tanstack/react-router";

type TemplateItemProps = {
  template: {
    name: string;
    variants: string[];
  };
};

export function TemplateItem({ template }: TemplateItemProps) {
  const params = useParams({
    from: "/previews/$templateName/$variant",
  });
  const { templateName, variant } = params;

  const isTemplateActive = templateName === template.name;

  const firstVariant = [...template.variants].sort()[0];

  const linkParams = isTemplateActive
    ? { templateName: template.name, variant: variant }
    : { templateName: template.name, variant: firstVariant };

  return (
    <div className="mb-8">
      <Link
        from="/previews/$templateName/$variant"
        to="/previews/$templateName/$variant"
        params={linkParams}
        className={cn(
          "flex items-center w-full text-white py-8 px-8 hover:bg-gray-800 rounded",
          isTemplateActive && "pointer-events-none"
        )}
      >
        <span className="text-2xl font-semibold">{template.name}</span>
      </Link>

      {isTemplateActive && (
        <div className="ml-16">
          {[...template.variants].sort().map((variantName) => {
            const isSelected =
              templateName === template.name && variant === variantName;
            return (
              <Link
                key={variantName}
                from="/previews/$templateName/$variant"
                to="/previews/$templateName/$variant"
                params={{
                  templateName: template.name,
                  variant: variantName,
                }}
                className={cn(
                  "flex items-center py-8 px-8 rounded",
                  isSelected
                    ? "bg-blue-600 text-white pointer-events-none"
                    : "text-white hover:bg-gray-800"
                )}
              >
                <span className="text-2xl">{variantName}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
