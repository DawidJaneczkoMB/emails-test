import { getPreview } from "@/server/getPreview";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { VariantLayout } from "@/components/app/VariantLayout";
import { Preview } from "@/components/app/Preview";
import { CodePreview } from "@/components/app/CodePreview";
import { Loading } from "@/components/app/Loading";
import { z } from "zod";

const previewSearchSchema = z.object({
  view: z.enum(["preview", "code"]).optional().default("preview"),
  lang: z.enum(["html", "markdown"]).optional().default("html"),
});

export const Route = createFileRoute("/previews/$templateName/$variant")({
  validateSearch: previewSearchSchema,
  component: RouteComponent,
});

function RouteComponent() {
  const { templateName, variant } = Route.useParams();
  const search = Route.useSearch();
  const { data, isLoading } = useQuery({
    queryKey: ["preview", templateName, variant],
    queryFn: () => getPreview({ data: { templateName, variant } }),
    enabled: !!templateName && !!variant,
  });

  if (isLoading) {
    return (
      <VariantLayout templateName={templateName} variant={variant}>
        <Loading />
      </VariantLayout>
    );
  }

  if (!data) {
    return (
      <VariantLayout templateName={templateName} variant={variant}>
        <Preview notFound />
      </VariantLayout>
    );
  }

  const { html, prettyHtml, plainText } = data;

  const currentView = search.view;

  return (
    <VariantLayout templateName={templateName} variant={variant}>
      {currentView === "code" ? (
        <CodePreview
          html={prettyHtml}
          plainText={plainText}
          templateName={templateName}
          variant={variant}
        />
      ) : (
        <Preview html={html} />
      )}
    </VariantLayout>
  );
}
