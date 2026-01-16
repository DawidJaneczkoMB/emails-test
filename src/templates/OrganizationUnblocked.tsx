import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type OrganizationUnblockedProps = {
  unblockageDate: string;
  reason?: string;
  name: string;
};

export function OrganizationUnblocked({
  unblockageDate,
  reason,
  name,
}: OrganizationUnblockedProps) {
  const detailsList: DetailsRow[] = [
    {
      name: "Unblocking date",
      value: unblockageDate,
    },
    ...(reason
      ? [
          {
            name: "Reason",
            value: reason,
          },
        ]
      : []),
  ];

  return (
    <Main>
      <HeroSection image="unblocked.png">
        Hello {name},<br />
        your account has been unblocked!
      </HeroSection>
      <RoundedSection>
        <Text className="text-waterloo pt-32 pb-32 px-41 text-center">
          Your account is active again and you can take full advantage of
          Payments AI's functionality.
        </Text>
        <Divider />
        <Section className="px-25">
          <DetailsList title="Unblocking details" list={detailsList} />
        </Section>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
