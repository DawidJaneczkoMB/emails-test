import { useQuery } from "@tanstack/react-query";
import { loadTemplates } from "../../server/loadTemplates";
import { TemplatesList } from "./TemplatesList";

export function Sidebar() {
  const { data: templates = [], isLoading } = useQuery({
    queryKey: ["templates"],
    queryFn: () => loadTemplates({ data: undefined }),
  });

  if (isLoading) {
    return (
      <div className="bg-black flex flex-col">
        <div className="flex-1 overflow-y-auto px-8 text-white text-xl p-16">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black flex flex-col p-16 border-r border-gray-700">
      <h1 className="text-white text-3xl font-bold mb-16">PaymentsAI Emails</h1>
      <TemplatesList templates={templates} />
    </div>
  );
}
