import { Fragment } from "react";
import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type PayoutProps = {
  payoutReport: { currency: string; value: string }[];
  organizationName: string;
  payoutDate: string;
  name: string;
};

export function Payout({
  organizationName,
  payoutReport,
  payoutDate,
  name,
}: PayoutProps) {
  const detailsList: DetailsRow[] = [
    {
      name: "Organization name",
      value: organizationName,
    },
    {
      value: payoutReport.map(({ currency, value }) => (
        <Fragment key={currency}>
          {value} {currency}
          <br />
        </Fragment>
      )),
      name: "Amount",
    },
    {
      name: "Payout date",
      value: payoutDate,
    },
  ];

  return (
    <Main>
      <HeroSection image="payout.png">Hello {name}!</HeroSection>
      <RoundedSection>
        <Text className="font-heading text-h5 pb-32 pt-32 text-center px-25">
          Your Payments AI gateway payout has been made.
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
