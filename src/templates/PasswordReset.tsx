import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

export function PasswordReset() {
  return (
    <Main>
      <HeroSection image="email-verification.png">
        Password Reset Request
      </HeroSection>
      <Section className="pt-4">
        <Text className="text-waterloo pb-14 text-center">
          We received a request to reset the password for your Payments AI
          <br />
          account. Click the link below to create a new password
        </Text>
        <Button href="#">Create new password</Button>
        <Text className="text-waterloo pt-14 text-center">
          If you didn't request a password reset, ignore this email. For safety,
          <br />
          regularly change your password and avoid reuse across accounts.
        </Text>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
