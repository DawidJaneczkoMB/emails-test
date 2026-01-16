import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type AccessToOrganizationRequestProps = {
  organizationMembersUrl: string;
  organizationName: string;
  name: string;
};

export function AccessToOrganizationRequest({
  organizationMembersUrl,
  organizationName,
  name,
}: AccessToOrganizationRequestProps) {
  return (
    <Main>
      <HeroSection image="new-member.png">
        {name} has requested access to your
        <br />
        {organizationName} organization
      </HeroSection>
      <Section>
        <Text className="text-waterloo pb-14 text-center">
          You have received a new access request for your {organizationName}{" "}
          organization. You can manage this request in the{" "}
          <strong>Members</strong> section of your organization's settings.
          Please review and either approve or deny this request.
        </Text>
        <Button href={organizationMembersUrl}>
          Go to organization members
        </Button>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
