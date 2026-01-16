import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { AttachmentsSection } from "@/components/emails/AttachmentsSection";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import type AttachmentsData from "@/types/AttachmentsData";

export type ResourceReportProps = AttachmentsData & {
  requestedDate: string;
  resource: string;
  dateFrom: string;
  dateTo: string;
  name: string;
};

export function ResourceReport({
  requestedDate,
  attachments,
  resource,
  dateFrom,
  dateTo,
  name,
}: ResourceReportProps) {
  const detailsList: DetailsRow[] = [
    {
      valueTextProps: {
        style: {
          textTransform: "capitalize",
        },
      },
      value: resource,
      name: "Report",
    },
    {
      value: `${dateFrom} - ${dateTo}`,
      name: "Period",
    },
    {
      name: "Requested date",
      value: requestedDate,
    },
  ];

  return (
    <Main>
      <HeroSection image="gateway-reports-logo.png">Hello {name}!</HeroSection>
      <RoundedSection>
        <AttachmentsSection
          reportName={`PaymentsAI Gateway - ${resource} Details`}
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
