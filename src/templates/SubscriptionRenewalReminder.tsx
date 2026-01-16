import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type SubscriptionRenewalReminderProps = {
  subscriptionLeftDays: number;
  subscriptionEndDate: string;
  upcomingPrice: number;
  customerName: string;
  productName: string;
  currency: string;
} & OrganizationCustomizableEmailProps;

export function SubscriptionRenewalReminder({
  subscriptionLeftDays,
  subscriptionEndDate,
  visualCustomization,
  customerServiceMail,
  organizationName,
  upcomingPrice,
  customerName,
  productName,
  currency,
}: SubscriptionRenewalReminderProps) {
  const {
    colorTextHeaders,
    fontParagraphs,
    illustrations,
    colorAccents,
    fontHeaders,
    logoUrl,
  } = visualCustomization;

  const detailsList: DetailsRow[] = [
    {
      value: productName,
      name: "Product",
    },
    {
      value: `${upcomingPrice} ${currency}`,
      name: "Next payment amount",
    },
    {
      name: "Subscription days left",
      value: subscriptionLeftDays,
    },
    {
      value: subscriptionEndDate,
      name: "Renewal date",
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
        Hello {customerName}!
      </HeroSection>
      <RoundedSection>
        <Text className="font-heading text-h5 pt-32 leading-23 text-center px-25 pb-10">
          Your {productName} subscription will renew soon
        </Text>
        <Text className="text-body-small font-heading pb-24 pt-10 text-center px-25">
          This is a friendly reminder that your subscription for {productName}{" "}
          will renew automatically on {subscriptionEndDate}.
        </Text>
        <Divider />
        <Section className="px-25">
          <DetailsList
            fontParagraphs={fontParagraphs}
            title="Subscription summary"
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
