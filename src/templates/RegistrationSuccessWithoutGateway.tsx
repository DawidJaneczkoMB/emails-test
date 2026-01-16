import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type RegistrationSuccessWithoutGatewayProps = {
  appUrl: string;
};

export function RegistrationSuccessWithoutGateway({
  appUrl,
}: RegistrationSuccessWithoutGatewayProps) {
  return (
    <Main>
      <HeroSection image="registration-success.png">
        Thank you for creating
        <br />a <strong>Payments AI account</strong>
      </HeroSection>
      <Section className="pt-4">
        <Text className="text-center">
          To fully activate your Payments AI account, please:
        </Text>
        <ol>
          <li className="font-body text-body text-pickled-bluewood">
            <Text className="text-left">
              <strong>Add a payment instrument</strong> - set up the bank
              account or debit/credit card used for fees and payouts.
            </Text>
          </li>
          <li className="font-body text-body text-pickled-bluewood">
            <Text className="text-left">
              <strong>Connect your payment gateway</strong> - allow Payments AI
              to read transactions, payouts, and balances.
            </Text>
          </li>
        </ol>
        <Button href={`${appUrl}?setup=1`} className="w-full">
          Start setup
        </Button>
      </Section>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
