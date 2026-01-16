import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type PaymentConfirmationProps = {
  amount: number | string;
  invoiceDate: string;
  invoiceId: string;
  currency: string;
  name: string;
};

export function PaymentConfirmation({
  invoiceDate,
  invoiceId,
  currency,
  amount,
  name,
}: PaymentConfirmationProps) {
  const detailsList: DetailsRow[] = [
    {
      name: "Invoice number",
      value: invoiceId,
    },
    {
      name: "Customer",
      value: name,
    },
    {
      value: `${amount} ${currency}`,
      name: "Amount",
    },
    {
      name: "Payment date",
      value: invoiceDate,
    },
  ];

  return (
    <Main>
      <HeroSection image="payment-successfull.png">
        Invoice {invoiceId} payment received!
      </HeroSection>
      <RoundedSection>
        <Text className="text-body-small font-heading pb-24 pt-24 text-center px-25">
          Payment from {name} for Invoice {invoiceId} has been successfully
          processed.
        </Text>
        <Divider />
        <Section className="px-25">
          <DetailsList list={detailsList} title="Details" />
        </Section>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
