import getImage from "@/utils/emails/getImage";
import { getHeadingTextFontStyleProps } from "@/utils/emails/getTextProps";
import { Button } from "./Button";
import { Text } from "./Text";
import { EmailFonts } from "@/importedUtils";
import { Img, Section } from "@react-email/components";
import { emailsCn } from "@/utils/emails/cn";

export type RetryTransaction = {
  retryLinkDescription?: string;
  colorTextHeaders?: string;
  fontHeaders?: EmailFonts;
  retryLinkText?: string;
  retryHref: string;
};

export default function RetryTransaction({
  retryLinkDescription = "Click the button below if you want to retry this transaction",
  retryLinkText = "Try again",
  colorTextHeaders,
  fontHeaders,
  retryHref,
}: RetryTransaction) {
  const headingTextProps = getHeadingTextFontStyleProps(fontHeaders);

  return (
    <>
      <Section className="pb-16 pt-32 px-25">
        <Img
          src={getImage("refresh.png")}
          alt="Refresh icon"
          className="w-50 h-auto mx-auto"
        />
      </Section>
      <Text
        className={emailsCn("pb-24 px-25", headingTextProps.className)}
        style={{ color: colorTextHeaders, ...headingTextProps.style }}
      >
        {retryLinkDescription}
      </Text>

      <Button sectionClassName="pb-32 pt-0" href={retryHref}>
        {retryLinkText}
      </Button>
    </>
  );
}
