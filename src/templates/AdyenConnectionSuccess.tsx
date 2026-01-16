import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

export function AdyenConnectionSuccess() {
  return (
    <Main>
      <HeroSection image="paymanetai-gateway-connection-success.png">
        Payments AI gateway has been successfully connected to your account
      </HeroSection>
      <RoundedSection>
        <Text className="text-waterloo text-left p-32">
          Once your initial documents pass preliminary verification checks, your
          account will be successfully connected. In most cases, this happens
          quickly.
          <br />
          <br />
          Once processing begins, your application and documents will go through
          a final review as well as your website to ensure compliance with card
          brand regulations. If any additional documentation is required, you
          will receive an email.
          <br />
          <br />
          <strong>
            All documentation and website compliance must be completed in order
            for payouts to be enabled.
          </strong>
        </Text>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
