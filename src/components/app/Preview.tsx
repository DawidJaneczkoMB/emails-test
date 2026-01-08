import type { ComponentProps } from "react";

type PreviewProps = {
  html?: string;
  isLoading?: boolean;
  notFound?: boolean;
};

export function Preview({ html, isLoading, notFound }: PreviewProps) {
  if (isLoading || notFound) {
    return (
      <Wrapper>
        <p className="text-black text-2xl">
          {isLoading ? "Loading..." : "Preview not found"}
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="max-w-600 w-full flex-1 flex flex-col min-h-0">
        <iframe srcDoc={html} className="w-full flex-1 min-h-0"></iframe>
      </div>
    </Wrapper>
  );
}

function Wrapper({ children }: ComponentProps<"div">) {
  return (
    <div className="flex-1 bg-white overflow-y-auto flex flex-col items-center p-32">
      {children}
    </div>
  );
}
