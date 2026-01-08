import type { EmailFonts } from "@/importedUtils";

export type VisualCustomizationProps = {
  colorTextParagraphs: string;
  fontParagraphs: EmailFonts;
  colorTextHeaders: string;
  fontHeaders: EmailFonts;
  logoUrl: string | null;
  illustrations: boolean;
  colorAccents: string;
};

type OrganizationCustomizableEmailProps = {
  visualCustomization: VisualCustomizationProps;
  customerServiceMail: string;
  organizationName?: string;
};

export default OrganizationCustomizableEmailProps;
