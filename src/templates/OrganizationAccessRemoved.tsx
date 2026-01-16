import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";

type OrganizationAccessRemovedProps = OrganizationCustomizableEmailProps;

export function OrganizationAccessRemoved({
  customerServiceMail,
  organizationName,
}: OrganizationAccessRemovedProps) {
  return (
    <Main>
      <HeroSection image="removed-member.png">
        Access to the {organizationName} has been
        <br />
        removed by the administrator.
      </HeroSection>
      <Section className="pt-4 pb-0">
        <Text className="text-waterloo pb-14 text-center px-25">
          You no longer have access to the {organizationName} organization.
          Contact
          <br />
          your organization's administrator to grant access again.
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
