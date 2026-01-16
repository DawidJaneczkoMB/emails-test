import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type AccessToOrganizationGrantedProps = {
  organizationName: string;
  organizationDashboardUrl: string;
};

export function AccessToOrganizationGranted({
  organizationName,
  organizationDashboardUrl,
}: AccessToOrganizationGrantedProps) {
  return (
    <Main>
      <HeroSection image="new-member.png">
        Access Approved - Welcome to {organizationName}!
      </HeroSection>
      <Section>
        <Text className="text-waterloo pb-14 text-center">
          We're pleased to inform you that the owner of {organizationName}{" "}
          organization reviewed your request and granted you an access to use
          the application.
        </Text>
        <Button href={organizationDashboardUrl}>Go to Payments AI</Button>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
