import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Button } from "@/components/emails/Button";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type TopupInitiatedProps = {
  currency: string;
  amount: number;
  name: string;
  date: string;
  href: string;
};

export function TopupInitiated({
  currency,
  amount,
  name,
  date,
  href,
}: TopupInitiatedProps) {
  const detailsList: DetailsRow[] = [
    {
      value: `${amount} ${currency}`,
      name: "Amount",
    },
    {
      name: "Date",
      value: date,
    },
  ];

  return (
    <Main>
      <HeroSection image="payout-error.png">Hello {name}!</HeroSection>
      <RoundedSection>
        <Text className="font-heading text-h5 pb-10 pt-20 text-center px-25">
          New Top-up
        </Text>

        <Text className="text-body text-waterloo pb-20 pt-10 text-center px-25">
          Your Payments AI balance is currently negative, due to unpaid
          fees/refunds/chargebacks exceeding your account's available funds.
        </Text>

        <Text className="text-body text-waterloo pb-20 pt-10 text-center px-25">
          To resolve this and ensure uninterrupted service, we have initiated a
          top-up from your linked payment method. This adjustment will reflect
          in your account shortly.
        </Text>

        <Divider />
        <Section className="px-25">
          <DetailsList title="Top-up details" list={detailsList} />
        </Section>

        <Button href={href} sectionClassName="pt-26 pb-32" className="w-full">
          Go to Statement Report
        </Button>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
