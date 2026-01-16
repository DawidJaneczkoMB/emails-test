import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Link } from "@/components/emails/Link";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

export function ConfirmationCode() {
  return (
    <Main>
      <HeroSection image="email-verification.png">
        Your confirmation code
      </HeroSection>
      <Section>
        <Text className="text-waterloo text-center px-25 py-10">
          To confirm action, please use the following confirmation code:
        </Text>
        <Text className="text-h4 text-center px-25 py-10">{"{####}"}</Text>
        <Text className="text-waterloo text-center px-25 py-10">
          If you did not initiate an action requiring confirmation or have any
          concerns, please contact our support team immediately at{" "}
          <Link href="mailto:support@payments.ai">support@payments.ai</Link>.
        </Text>
        <AutomatedMessageCopy className="pt-24" />
      </Section>
    </Main>
  );
}
