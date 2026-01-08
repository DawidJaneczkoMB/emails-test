import { useState, useEffect } from "react";
import { Link, useSearch } from "@tanstack/react-router";

type CodePreviewProps = {
  html: string;
  plainText: string;
  templateName: string;
  variant: string;
};

export function CodePreview({
  html,
  plainText,
  templateName,
  variant,
}: CodePreviewProps) {
  const [copied, setCopied] = useState(false);
  const search = useSearch({ from: "/previews/$templateName/$variant" });
  const currentLang = search.lang;
  const isHtml = currentLang === "html";
  const isMarkdown = currentLang === "markdown";

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className="flex-1 bg-black flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-16 py-12 border-b border-gray-700">
        <div className="flex items-center gap-8">
          <Link
            from="/previews/$templateName/$variant"
            to="/previews/$templateName/$variant"
            params={{ templateName, variant }}
            search={(prev) => ({ ...prev, view: "code", lang: "html" })}
            className={`px-16 py-8 rounded text-lg font-medium transition-colors ${
              isHtml
                ? "bg-gray-700 text-white"
                : "bg-transparent text-gray-400 hover:text-white"
            }`}
          >
            HTML
          </Link>
          <Link
            from="/previews/$templateName/$variant"
            to="/previews/$templateName/$variant"
            params={{ templateName, variant }}
            search={(prev) => ({ ...prev, view: "code", lang: "markdown" })}
            className={`px-16 py-8 rounded text-lg font-medium transition-colors ${
              isMarkdown
                ? "bg-gray-700 text-white"
                : "bg-transparent text-gray-400 hover:text-white"
            }`}
          >
            Plain Text
          </Link>
        </div>
        <button
          className="p-8 text-gray-400 hover:text-white transition-colors cursor-pointer"
          title={copied ? "Copied!" : "Copy to clipboard"}
          onClick={async () => {
            const textToCopy = isHtml ? html : plainText;
            try {
              await navigator.clipboard.writeText(textToCopy);
              setCopied(true);
            } catch (err) {
              console.error("Failed to copy text:", err);
            }
          }}
        >
          {copied ? (
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="flex-1 overflow-auto bg-gray-900">
        <div className="p-16">
          <pre className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
            <code>
              {isHtml ? (
                <span className="whitespace-pre-wrap">{html}</span>
              ) : (
                <span className="whitespace-pre-wrap">{plainText}</span>
              )}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
