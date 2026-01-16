import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

export function RegistrationSuccess() {
  return (
    <Main>
      <HeroSection image="registration-success.png">
        Thank you for creating a Payments AI account
      </HeroSection>
      <Section className="pt-4">
        <Text className="text-center">
          Congratulations, you are approved and ready to start accepting
          payments!
          <br />
          If we need more information from you we will reach out and you can
          upload the documents in the account settings.
          <br />
          Please remember that it takes 7 days for the first transaction to hit
          your bank.
          <br />
          After that first transaction hits your bank account all others will be
          paid out in 24-48 hours.
        </Text>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
