import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Button } from "@/components/emails/Button";
import { Link } from "@/components/emails/Link";
import { Section } from "@react-email/components";

export type ChargebackDispute = {
  reasonDescription: string | null;
  deadline: string | null;
  transactionId: string;
  disputeId: string;
  currency: string;
  amount: number;
};

type ChargebackProps = {
  disputes: ChargebackDispute[];
  organizationId: string;
  appUrl: string;
  name: string;
};

export function Chargeback({
  organizationId,
  disputes,
  appUrl,
  name,
}: ChargebackProps) {
  const detailsLists: DetailsRow[][] = disputes.map(
    ({
      reasonDescription,
      transactionId,
      disputeId,
      currency,
      deadline,
      amount,
    }) => [
      {
        value: (
          <Link href={`${appUrl}/${organizationId}/disputes/${disputeId}`}>
            {disputeId}
          </Link>
        ),
        name: "Dispute ID",
      },
      {
        name: "Transaction ID",
        value: transactionId,
      },
      {
        value: `${amount} ${currency}`,
        name: "Amount",
      },
      {
        value: reasonDescription,
        name: "Reason message",
      },
      {
        name: "Action deadline",
        value: deadline,
      },
    ]
  );

  const description =
    disputes.length === 1
      ? "A new chargeback has appeared on your account. You can find it in the “Disputes” section."
      : `${disputes.length} new chargebacks have appeared on your account. You can find them in the “Disputes” section.`;

  return (
    <Main>
      <HeroSection image="chargeback.png">Hello {name}</HeroSection>
      <RoundedSection>
        <Text className="font-heading text-h5 leading-23 text-center pt-32 pb-10 px-25">
          New Chargeback
        </Text>
        <Text className="text-body-small font-heading text-waterloo text-center pb-24 pt-10 px-25">
          {description}
        </Text>
        <Divider />
        <Section className="px-20">
          {detailsLists.map((detailsList, index) => (
            <DetailsList
              title={`Chargeback details #${index + 1}`}
              list={detailsList}
              // biome-ignore lint/suspicious/noArrayIndexKey: this only runs once
              key={index}
            />
          ))}
          <Button
            href={`${appUrl}/${organizationId}/disputes`}
            className="mb-32 mx-0 w-full"
          >
            Go to Disputes
          </Button>
        </Section>
      </RoundedSection>
    </Main>
  );
}
