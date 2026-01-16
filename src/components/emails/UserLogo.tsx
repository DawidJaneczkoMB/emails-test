import { Img } from "@react-email/components";
import { Text } from "./Text";
import { getHeadingTextFontStyleProps } from "@/utils/getTextProps";
import { EmailFonts } from "@/importedUtils";
import { emailsCn } from "@/utils/cn";

export type UserLogoProps = {
  organizationNameColor?: string;
  organizationFont?: EmailFonts;
  organizationName?: string;
  logoUrl?: string | null;
};

export function UserLogo({
  organizationNameColor,
  organizationName,
  organizationFont,
  logoUrl,
}: UserLogoProps) {
  if (logoUrl) {
    return (
      <Img alt="Company logo" src={logoUrl} className="w-100 h-auto pb-16" />
    );
  }

  const headingTextProps = getHeadingTextFontStyleProps(organizationFont);

  return (
    <Text
      style={{
        color: organizationNameColor,
        ...headingTextProps.style,
      }}
      className={emailsCn("text-h5 pb-16", headingTextProps.className)}
    >
      {organizationName}
    </Text>
  );
}
