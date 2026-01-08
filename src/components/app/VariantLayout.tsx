import { TopBar } from "@/components/app/TopBar";

type VariantLayoutProps = {
  templateName: string;
  variant: string;
  children: React.ReactNode;
};

export function VariantLayout({
  templateName,
  variant,
  children,
}: VariantLayoutProps) {
  return (
    <div className="flex flex-col flex-1 h-full">
      <TopBar templateName={templateName} variant={variant} />
      {children}
    </div>
  );
}
