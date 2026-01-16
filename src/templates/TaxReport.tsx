import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { AttachmentsSection } from "@/components/emails/AttachmentsSection";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Divider } from "@/components/emails/Divider";
import { Section } from "@react-email/components";
import type AttachmentsData from "@/types/AttachmentsData";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type TaxReportProps = AttachmentsData & {
  dateFrom: string[];
  dateTo: string[];
  report: string;
  name: string;
};

export function TaxReport({
  attachments,
  dateFrom,
  report,
  dateTo,
  name,
}: TaxReportProps) {
  const dates = dateFrom.map((date, index) => ({
    to: dateTo[index],
    from: date,
  }));

  const detailsList: DetailsRow[] = [
    {
      name: "Report",
      value: report,
    },
    {
      value: dates.map(({ from, to }) => `${from} - ${to}`).join(", "),
      name: "Period(s)",
    },
  ];

  return (
    <Main>
      <HeroSection image="gateway-reports-logo.png">Hello {name}!</HeroSection>
      <RoundedSection>
        <AttachmentsSection
          reportName="PaymentsAI Gateway - Tax report"
          attachments={attachments}
        />
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
