import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import { Button } from "@/components/emails/Button";
import { Img, Section } from "@react-email/components";
import getImage from "@/utils/getImage";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type NegativeBalanceReminderAggressiveProps = {
  updatePaymentUrl: string;
  name: string;
};

// negative balance has since been renamed to unpaid invoices
// but changing this would require too much effort
export function NegativeBalanceReminderAggressive({
  updatePaymentUrl,
  name,
}: NegativeBalanceReminderAggressiveProps) {
  return (
    <Main>
      <HeroSection image="payout-error.png">
        {name}, your invoices are unpaid!
      </HeroSection>
      <RoundedSection>
        <Text className="font-heading text-h4 leading-23 text-center pt-32 pb-0 px-25">
          Unpaid invoice
        </Text>
        <Text className="text-center pb-24 pt-10 px-25">
          Your invoices for using Payments AI have still not been paid. To avoid
          legal consequences or account cancellation, pay your invoices as soon
          as possible.
        </Text>
        <Divider />
        <Section className="pt-32 pb-10 px-25">
          <Img
            src={getImage("refresh.png")}
            alt="Card error"
            className="ph-auto w-60 mx-auto"
          />
        </Section>
        <Text className="leading-small text-center pb-32 pt-10 px-25">
          Please settle your payments.
        </Text>
        <Button href={updatePaymentUrl} sectionClassName="pt-0 pb-32">
          Pay your invoice
        </Button>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
