import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type ConfirmationCodeTimeLimitedProps = {
  codeLifetimeMinutes: number;
  editPeriodMinutes: number;
  code: string;
};

export function ConfirmationCodeTimeLimited({
  codeLifetimeMinutes,
  editPeriodMinutes,
  code,
}: ConfirmationCodeTimeLimitedProps) {
  return (
    <Main>
      <HeroSection image="email-verification.png">
        Your confirmation code
      </HeroSection>
      <Section>
        <Text className="text-waterloo text-center px-25 py-10">
          To confirm action, please use the following confirmation code:
        </Text>
        <Text className="text-h4 text-center px-25 py-10">{code}</Text>
        <Text className="text-waterloo text-center px-25 py-10">
          This verification code is valid for {codeLifetimeMinutes} minutes.
          Once verified, edit mode will be enabled for {editPeriodMinutes}{" "}
          minutes.
        </Text>
        <AutomatedMessageCopy className="pt-24" />
      </Section>
    </Main>
  );
}
