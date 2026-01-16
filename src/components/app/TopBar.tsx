import { cn } from "@/utils/cn";
import { Link, useSearch } from "@tanstack/react-router";

type TopBarProps = {
  templateName: string;
  variant: string;
};

export function TopBar({ templateName, variant }: TopBarProps) {
  const search = useSearch({ from: "/previews/$templateName/$variant" });
  const currentView = search.view;
  const isPreview = currentView === "preview";
  const isCode = currentView === "code";

  return (
    <div className="min-h-64 h-64 bg-black flex items-center justify-center px-16 border-b border-gray-700">
      <div className="flex items-center gap-8">
        <Link
          from="/previews/$templateName/$variant"
          to="/previews/$templateName/$variant"
          params={{ templateName, variant }}
          search={(prev) => ({ ...prev, view: "preview" })}
          className={cn(
            "size-40 rounded flex items-center justify-center cursor-pointer transition-colors",
            isPreview ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
          )}
        >
          <svg
            className={cn(
              "size-20",
              isPreview ? "text-white" : "text-gray-400"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </Link>
        <Link
          from="/previews/$templateName/$variant"
          to="/previews/$templateName/$variant"
          params={{ templateName, variant }}
          search={(prev) => ({ ...prev, view: "code" })}
          className={cn(
            "size-40 rounded flex items-center justify-center cursor-pointer transition-colors",
            isCode ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
          )}
        >
          <svg
            className={cn("size-20", isCode ? "text-white" : "text-gray-400")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
