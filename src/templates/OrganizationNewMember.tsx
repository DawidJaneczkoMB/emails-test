import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import type { MemberRole } from "@/types/Member";
import { MemberRoleMap } from "@/types/Member";

type OrganizationNewMemberProps = {
  organizationName: string;
  firstName: string;
  lastName: string;
  role: MemberRole;
  link: string;
};

export function OrganizationNewMember({
  organizationName,
  firstName,
  lastName,
  link,
  role,
}: OrganizationNewMemberProps) {
  const name = `${firstName || ""} ${lastName || ""}`.trim();
  return (
    <Main>
      <HeroSection image="new-member.png">
        {name} joined your organization
      </HeroSection>
      <Section className="pt-4">
        <Text className="text-waterloo pb-14 text-center">
          {name} has joined {organizationName} as {MemberRoleMap[role]}. To view
          all members of your organization, please click the button below.
        </Text>
        <Button href={`${link}/settings/members`}>Organization members</Button>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
