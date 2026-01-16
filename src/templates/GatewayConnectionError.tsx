import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Link } from "@/components/emails/Link";

export function GatewayConnectionError() {
  return (
    <Main>
      <HeroSection
        moreContent={
          <Text className="text-waterloo pb-0 pt-24 text-center">
            Unfortunately we could not connect your account to the Payments AI
            gateway
          </Text>
        }
        image="paymanetai-gateway-connection-error.png"
      >
        Payments AI gateway
        <br />
        connection error
      </HeroSection>
      <RoundedSection>
        <Text className="font-medium font-heading pb-0 pt-24 leading-small text-center px-25">
          Contact support
        </Text>
        <Text className="text-waterloo pb-32 pt-12 text-center px-25">
          Please contact our support to clarify the issue and get help -{" "}
          <Link href="mailto:support@payments.ai">support@payments.ai</Link>
        </Text>
      </RoundedSection>
    </Main>
  );
}
