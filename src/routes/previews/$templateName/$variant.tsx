import { getPreview } from "@/server/getPreview";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/previews/$templateName/$variant")({
  component: RouteComponent,
});

function RouteComponent() {
  const { templateName, variant } = Route.useParams();
  const getHtml = useServerFn(getPreview);
  const [html, setHtml] = useState<string | null>(null);
  useEffect(() => {
    if (!templateName || !variant) return;
    getHtml({ data: { templateName, variant } }).then((html) => {
      setHtml(html);
    });
  }, [getHtml, templateName, variant]);

  return <div>{html}</div>;
}
