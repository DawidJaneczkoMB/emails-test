import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import { Img } from "@react-email/components";
import getImage from "@/utils/getImage";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";
import {
  getHeadingTextFontStyleProps,
  getParagraphTextFontStyleProps,
} from "@/utils/getTextProps";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { emailsCn } from "@/utils/cn";

type CreditCardExpirationReminderPoliteProps = {
  name: string;
} & OrganizationCustomizableEmailProps;

export function CreditCardExpirationReminderPolite({
  customerServiceMail,
  visualCustomization,
  organizationName,
  name,
}: CreditCardExpirationReminderPoliteProps) {
  const {
    colorTextParagraphs,
    colorTextHeaders,
    fontParagraphs,
    illustrations,
    colorAccents,
    fontHeaders,
    logoUrl,
  } = visualCustomization;

  const headingTextProps = getHeadingTextFontStyleProps(fontHeaders);
  const paragraphTextProps = getParagraphTextFontStyleProps(fontParagraphs);

  return (
    <Main>
      <HeroSection
        organizationName={organizationName}
        colorTextHeaders={colorTextHeaders}
        illustrations={illustrations}
        fontHeaders={fontHeaders}
        organizationCustomizable
        image="error.png"
        logoUrl={logoUrl}
      >
        Hello {name}
      </HeroSection>
      <RoundedSection>
        <Text
          className={emailsCn(
            "text-h4 leading-23 text-center pt-32 pb-0 px-25",
            headingTextProps.className
          )}
          style={{
            color: colorTextHeaders,
            ...headingTextProps.style,
          }}
        >
          Card expiring
        </Text>
        <Text
          className={emailsCn(
            "text-center pb-24 pt-10 px-25",
            paragraphTextProps.className
          )}
          style={{
            color: colorTextParagraphs,
            ...paragraphTextProps.style,
          }}
        >
          Thank you for being our customer!
          <br />
          We wanted to remind you that your card is about to expire. Please
          update your card details as soon as possible to avoid disruption in
          service.
        </Text>
        <Divider />

        <Img
          src={getImage("refresh.png")}
          alt="Card error"
          className="pt-32 pb-10 px-25 h-auto w-60 mx-auto"
        />

        <Text
          className={emailsCn(
            "leading-small text-center pt-10 pb-32 px-25",
            headingTextProps.className
          )}
          style={{
            color: colorTextHeaders,
            ...headingTextProps.style,
          }}
        >
          Please try to update your card details
        </Text>
      </RoundedSection>

      <AnyQuestionsCopy
        className="pt-24"
        colorAccents={colorAccents}
        customerServiceMail={customerServiceMail}
      />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
