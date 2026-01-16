import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import { Img } from "@react-email/components";
import getImage from "@/utils/getImage";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type ChargeInvoicePaymentFirstFailureProps = {
  daysRemaining: number;
  name: string;
};

export function ChargeInvoicePaymentFirstFailure({
  daysRemaining,
  name,
}: ChargeInvoicePaymentFirstFailureProps) {
  return (
    <Main>
      <HeroSection image="billing-failure-attempt.png">
        Hello {name}!
      </HeroSection>
      <RoundedSection>
        <Text className="font-heading text-h5 leading-23 text-center pt-32 pb-10 px-25">
          Billing failure
        </Text>
        <Text className="text-body-small font-heading text-center pb-24 pt-10 px-25">
          Unfortunately, we were not able to charge you for using Payments AI.
          We will try again in {daysRemaining} days.
          <br />
          Please refill your funds or update your billing details to avoid
          disruption in service.
        </Text>
        <Divider />
        <Img
          src={getImage("refresh.png")}
          alt="Refresh icon"
          className="pt-32 pb-10 px-25 h-auto w-60 mx-auto"
        />
        <Text className="font-heading leading-small text-center pb-32 pt-0 px-25">
          Please refill your funds or try to update your billing details
        </Text>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
