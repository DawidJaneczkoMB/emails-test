type PreviewProps = {
  html: string;
};

export function Preview({ html }: PreviewProps) {
  return (
    <div className="flex-1 bg-[#F5F5F5] overflow-y-auto flex flex-col items-center p-32">
      <div className="max-w-600 w-full flex-1 flex flex-col min-h-0">
        <iframe srcDoc={html} className="w-full flex-1 min-h-0"></iframe>
      </div>
    </div>
  );
}
