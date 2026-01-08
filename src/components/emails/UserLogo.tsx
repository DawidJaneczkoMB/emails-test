import { Img } from "@react-email/components";
import { Text } from "./Text";
import { getHeadingTextFontStyleProps } from "@/utils/getTextProps";
import { importedTheme } from "@/importedTheme";
import { EmailFonts } from "@/importedUtils";

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

  return (
    <Text
      style={{
        color: organizationNameColor,
        fontSize: importedTheme.text.h5,
        ...getHeadingTextFontStyleProps(organizationFont),
      }}
      className="pb-16"
    >
      {organizationName}
    </Text>
  );
}
