import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Link } from "@/components/emails/Link";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

export function Notification() {
  return (
    <Main>
      <HeroSection image="registration-success.png">
        Important Notice: Temporary Issue with Payouts
      </HeroSection>
      <RoundedSection>
        <Text className="text-waterloo pt-24 pb-10 px-25 text-left">
          Dear Valued Customers,
        </Text>
        <Text className="text-waterloo pt-16 pb-10 px-25 text-left">
          I hope this message finds you well. I am reaching out to inform you of
          an important matter regarding our payout processes that may affect
          you. Regrettably, we are currently experiencing some unforeseen issues
          with our bank that are affecting the timely delivery of payouts to our
          customers. We understand the inconvenience and frustration this may
          cause, and we want to assure you that we are working diligently to
          resolve this matter as swiftly as possible.
        </Text>
        <Text className="text-waterloo pt-16 pb-10 px-25 text-left">
          Please know that our team is in close communication with our bank
          representatives to identify and rectify the underlying issues causing
          these delays. We are committed to ensuring that your payouts are
          processed accurately and promptly. While we work towards a resolution,
          we kindly ask for your patience and understanding. Rest assured, we
          are prioritizing this matter and will provide updates as soon as new
          information becomes available.
        </Text>
        <Text className="text-waterloo pt-16 pb-10 px-25 text-left">
          In the unfortunate event that this issue persists, I want to assure
          you that Payments.ai is prepared to take responsibility. We will
          personally ensure that the funds you are owed are paid promptly. If
          you have any urgent concerns or require assistance, please do not
          hesitate to reach out to our customer support team at{" "}
          <Link href="mailto:support@payments.ai">support@payments.ai</Link>
        </Text>
        <Text className="text-waterloo pt-16 pb-10 px-25 text-left">
          We sincerely apologize for any inconvenience this may cause and
          appreciate your continued support and cooperation during this time.
        </Text>
        <Text className="text-waterloo pt-16 pb-10 px-25 text-left">
          Thank you for your understanding.
        </Text>
        <Text className="text-waterloo pb-34 pt-16 px-25 text-left">
          Best regards,
          <br />
          PaymentsAI Team
        </Text>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
