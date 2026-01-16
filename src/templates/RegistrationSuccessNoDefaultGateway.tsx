import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

export function RegistrationSuccessNoDefaultGateway() {
  return (
    <Main>
      <HeroSection image="registration-success.png">
        Thank you for creating a Payments AI account
      </HeroSection>
      <Section className="pt-4">
        <Text className="text-center">
          The last thing you will have to do before starting using Payments AI
          is update your billing information in the settings panel and connect
          with a payment gateway. Our Payments AI Gateway will be available for
          you soon!
        </Text>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
