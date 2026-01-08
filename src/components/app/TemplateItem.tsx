import { useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState(() => isTemplateActive);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center w-full text-white py-8 px-8 cursor-pointer hover:bg-gray-800 rounded"
      >
        <svg
          className={`w-4 h-4 mr-8 text-gray-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="text-xl font-semibold">{template.name}</span>
      </button>

      {isExpanded && (
        <div className="ml-16">
          {template.variants.map((variantName) => {
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
                className={`flex items-center py-8 px-8 cursor-pointer rounded ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                <svg
                  className={`w-4 h-4 mr-8 ${
                    isSelected ? "text-gray-300" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-xl">{variantName}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
