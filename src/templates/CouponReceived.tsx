import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";

type CouponReceivedProps = {
  amount: number;
};

export function CouponReceived({ amount }: CouponReceivedProps) {
  return (
    <Main>
      <HeroSection image="email-verification.png">
        You have received a Payments AI coupon.
      </HeroSection>
      <Section>
        <Text className="text-waterloo text-center px-25 py-10">
          You have received a coupon worth ${amount}. This amount will be
          automatically deducted from your invoice for using Payments AI. If the
          amount due is higher than the value of the voucher, the remaining
          amount will be carried over to subsequent invoices.
        </Text>
        <AnyQuestionsCopy className="pt-24" />
      </Section>
    </Main>
  );
}
