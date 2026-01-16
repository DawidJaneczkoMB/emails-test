import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";
import type SubscriptionData from "@/types/SubscriptionData";
import {
  getHeadingTextFontStyleProps,
  getParagraphTextFontStyleProps,
} from "@/utils/getTextProps";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { emailsCn } from "@/utils/cn";

type TrialEndReminderProps = {
  nextCharge: string;
  timeLeft: string;
  name: string;
} & SubscriptionData &
  OrganizationCustomizableEmailProps;

export function TrialEndReminder({
  customerServiceMail,
  visualCustomization,
  organizationName,
  productName,
  nextCharge,
  planName,
  currency,
  timeLeft,
  website,
  amount,
  name,
}: TrialEndReminderProps) {
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

  const detailsList: DetailsRow[] = [
    {
      name: "Customer",
      value: name,
    },
    {
      value: organizationName,
      name: "Business name",
    },
    {
      name: "Business website",
      value: website,
    },
    {
      value: `${planName} - ${productName}`,
      name: "Product",
    },
    {
      value: `${amount} ${currency}`,
      name: "Amount",
    },
    {
      name: "Trial left",
      value: timeLeft,
    },
    {
      name: "Next charge",
      value: nextCharge,
    },
  ];

  return (
    <Main>
      <HeroSection
        organizationName={organizationName}
        colorTextHeaders={colorTextHeaders}
        illustrations={illustrations}
        fontHeaders={fontHeaders}
        organizationCustomizable
        image="hourglass.png"
        logoUrl={logoUrl}
      >
        Hello {name}!
      </HeroSection>
      <RoundedSection>
        <Text
          className={emailsCn(
            "text-h4 leading-23 pt-32 pb-0 text-center px-25",
            headingTextProps.className
          )}
          style={{
            color: colorTextHeaders,
            ...headingTextProps.style,
          }}
        >
          Your trial is about to end
        </Text>
        <Text
          className={emailsCn(
            "pb-24 pt-10 text-center px-25",
            paragraphTextProps.className
          )}
          style={{
            color: colorTextParagraphs,
            ...paragraphTextProps.style,
          }}
        >
          Depending on your pre-selected plan, we will either charge you for the
          first subscription fee soon or cancel it.
        </Text>
        <Divider />
        <Section className="px-25">
          <DetailsList
            fontParagraphs={fontParagraphs}
            title="Subscription details"
            fontHeaders={fontHeaders}
            list={detailsList}
          />
        </Section>
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
