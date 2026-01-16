import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";
import type SubscriptionData from "@/types/SubscriptionData";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type SubscriptionCancelledProps = {
  cancelationDate: string;
  period: string;
  name: string;
} & Pick<SubscriptionData, "productName" | "currency" | "planName" | "amount"> &
  OrganizationCustomizableEmailProps;

export function SubscriptionCancelled({
  customerServiceMail,
  visualCustomization,
  organizationName,
  cancelationDate,
  productName,
  planName,
  currency,
  amount,
  period,
  name,
}: SubscriptionCancelledProps) {
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
      value: `${planName} - ${productName}`,
      name: "Subscription",
    },
    {
      value: `${amount} ${currency} / ${period}`,
      name: "Price",
    },
    {
      name: "Cancelation date",
      value: cancelationDate,
    },
  ];

  return (
    <Main>
      <HeroSection
        image="subscription-dunning-final-attempt.png"
        organizationName={organizationName}
        colorTextHeaders={colorTextHeaders}
        illustrations={illustrations}
        fontHeaders={fontHeaders}
        organizationCustomizable
        logoUrl={logoUrl}
      >
        {name},
        <br />
        your subscription has been canceled
      </HeroSection>
      <RoundedSection>
        <Section className="px-25">
          <DetailsList
            fontParagraphs={fontParagraphs}
            fontHeaders={fontHeaders}
            list={detailsList}
            title="Details"
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
