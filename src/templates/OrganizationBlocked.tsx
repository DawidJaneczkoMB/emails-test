import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type OrganizationBlockedProps = {
  blockageDate: string;
  reason: string;
  name: string;
};

export function OrganizationBlocked({
  blockageDate,
  reason,
  name,
}: OrganizationBlockedProps) {
  const detailsList: DetailsRow[] = [
    {
      name: "Blockage date",
      value: blockageDate,
    },
    {
      name: "Reason",
      value: reason,
    },
  ];

  return (
    <Main>
      <HeroSection image="blocked.png">
        {name},<br />
        your account has been blocked.
      </HeroSection>
      <RoundedSection>
        <Text className="text-waterloo py-32 px-41 text-center">
          Until it is unblocked, it will be impossible to use the PaymentsAI
          application.
          <br />
          <br />
          Check the reason for the blockade below. If it is not given, please
          contact our support.
        </Text>
        <Divider />
        <Section className="px-25">
          <DetailsList title="Blockage details" list={detailsList} />
        </Section>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
