import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type ChargeInvoicePaymentSuccessProps = {
  amount: number | string;
  invoiceDate: string;
  invoiceId: string;
  currency: string;
  name: string;
};

export function ChargeInvoicePaymentSuccess({
  invoiceDate,
  invoiceId,
  currency,
  amount,
  name,
}: ChargeInvoicePaymentSuccessProps) {
  const detailsList: DetailsRow[] = [
    {
      value: `${amount} ${currency}`,
      name: "Amount",
    },
    {
      name: "Invoice ID",
      value: invoiceId,
    },
    {
      value: invoiceDate,
      name: "Date",
    },
  ];

  return (
    <Main>
      <HeroSection image="fees-payment-successfull.png">
        Hello {name}!
      </HeroSection>
      <RoundedSection>
        <Text className="font-heading text-h5 leading-23 text-center pt-32 pb-10 px-25">
          Payment successful
        </Text>
        <Text className="text-body-small font-heading text-center pb-24 pt-10 px-25">
          Your payment for using PaymentsAI was successfully processed.
        </Text>
        <Divider />
        <Section className="px-20">
        <DetailsList title="Payment details" list={detailsList} />
        </Section>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
