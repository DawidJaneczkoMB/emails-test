import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";

type OrganizationRemovedMemberProps = OrganizationCustomizableEmailProps & {
  firstName: string;
  lastName: string;
};

export function OrganizationRemovedMember({
  organizationName,
  firstName,
  lastName,
}: OrganizationRemovedMemberProps) {
  const name = `${firstName || ""} ${lastName || ""}`.trim();

  return (
    <Main>
      <HeroSection image="removed-member.png">
        {name} access to the {organizationName} has been removed by the
        administrator.
      </HeroSection>
      <Section className="pt-4">
        <Text className="text-waterloo pb-14 text-center">
          {name} no longer has access to the {organizationName} organization as
          an admin.
        </Text>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
