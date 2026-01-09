import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Link } from "@/components/emails/Link";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type AccessToOrganizationDeclinedProps = {
  customerServiceMail: string;
  organizationName: string;
};

export function AccessToOrganizationDeclined({
  customerServiceMail,
  organizationName,
}: AccessToOrganizationDeclinedProps) {
  return (
    <Main>
      <HeroSection image="removed-member.png">
        Access Request Update - Your Request Was Declined
      </HeroSection>
      <Section>
        <Text className="text-waterloo leading-20 pb-14">
          We regret to inform you that your request to join {organizationName}{" "}
          in Payments AI has been declined by the organization owner.
        </Text>

        <Text className="text-waterloo leading-20 pb-14">
          If you belive this is a mistake or would like to discuss this further,
          please contact the organization -{" "}
          <Link href={`mailto:${customerServiceMail}`}>
            {customerServiceMail}
          </Link>
          .
        </Text>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
