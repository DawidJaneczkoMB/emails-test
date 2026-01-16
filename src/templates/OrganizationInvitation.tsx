import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import type { MemberRole } from "@/types/Member";
import { MemberRoleMap } from "@/types/Member";

type OrganizationInvitationProps = {
  customerServiceMail: string;
  organizationName: string;
  invitationLink: string;
  role: MemberRole;
};

export function OrganizationInvitation({
  customerServiceMail,
  organizationName,
  invitationLink,
  role,
}: OrganizationInvitationProps) {
  return (
    <Main>
      <HeroSection image="email-verification.png">
        Join {organizationName}
        <br />
        organization in Payments AI
      </HeroSection>
      <Section className="pt-4">
        <Text className="text-waterloo pb-14 text-center">
          You've been invited to join {organizationName} organization in
          Payments AI as {MemberRoleMap[role]}. Please click the following link
          to create your account and get started:
        </Text>
        <Button href={invitationLink}>Join organization</Button>
        <Text className="text-body-small text-waterloo pb-0 pt-24 leading-small text-center">
          Your invitation will remain active for 7 days since now.
        </Text>
      </Section>

      <AnyQuestionsCopy
        className="pt-24"
        customerServiceMail={customerServiceMail}
      />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
