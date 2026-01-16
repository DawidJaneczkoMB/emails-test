import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { Section } from "@react-email/components";

export function TermsAndConditions() {
  return (
    <Main>
      <HeroSection>Terms & Conditions Update</HeroSection>
      <RoundedSection>
        <Text className="text-waterloo pt-24 pb-0 px-25 text-left">
          Dear Customers,
          <br />
          <br />
          We wanted to inform you about an update to our terms and conditions.
          We have made some changes to better serve you and to ensure that our
          policies are in line with industry standards.
          <br />
          <br />
          Here are some key points to note about the updates:
        </Text>
        <Section className="px-25">
          <ul className="pl-40 my-16">
            <li className="text-waterloo font-body text-body">
              <Text className="text-waterloo text-left">
                We have clarified certain language to make our policies easier
                to understand.
              </Text>
            </li>
            <li className="text-waterloo font-body text-body">
              <Text className=" text-left">
                We have updated our privacy policy to reflect changes in data
                protection laws.
              </Text>
            </li>
            <li className="text-waterloo font-body text-body">
              <Text className="text-waterloo text-left">
                We have made changes to our refund policy to better address
                customer concerns.
              </Text>
            </li>
          </ul>
        </Section>
        <Text className="text-waterloo pb-0 px-25 text-left">
          We encourage you to take a moment to review the updated terms and
          conditions, which can be found on our website. If you have any
          questions or concerns, please don't hesitate to contact us.
          <br />
          <br />
          Thank you for your continued business and loyalty.
          <br />
          <i>PaymentsAI Team</i>
        </Text>
        <Button
          href="https://app.payments.ai/terms-and-conditions.pdf"
          sectionClassName="pt-26 pb-32"
          className="w-full"
        >
          Read Terms & Conditions
        </Button>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
