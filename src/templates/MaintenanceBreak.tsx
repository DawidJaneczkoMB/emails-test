import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

export function MaintenanceBreak() {
  return (
    <Main>
      <HeroSection image="maintenance.png">Maintenance break</HeroSection>
      <RoundedSection>
        <Text className="text-waterloo pt-24 pb-10 px-25 text-left">
          Hello there valued customer,
        </Text>
        <Text className="text-waterloo py-10 px-25 text-left">
          We at Payments AI are thrilled to be part of your exciting journey.
          We're sure you have your next powerhouse of a launch just around the
          corner - we can't wait to see it go live! But before you hit that
          launch button, there's a quick routine tune-up we'd like to tell you
          about.
        </Text>
        <Text className="text-waterloo py-10 px-25 text-left">
          We're doing a bit of spring cleaning in our database to ensure
          everything runs super smoothly.{" "}
          <span className="font-semibold text-fiord">
            This quick maintenance is set for Wednesday, June 21st, at 9am ET.
          </span>{" "}
          It'll only be a brief pause - just 1 to 3 minutes - but it's an
          essential step in making sure we're giving you the best service
          possible. This tune-up is the second in a series of three that we've
          planned. We'll have a whole team watching over the process, making
          sure it all goes as smooth as silk.
        </Text>

        <Text className="text-waterloo py-10 px-25 text-left">
          And don't worry - your data will be safe and secure during this brief
          pause. Once we're done dusting off the cobwebs, you'll be back in
          business in no time.If you have any questions or need anything at all,
          reach out to our support team. They're ready and raring to
          assist.Thanks for choosing Payments AI for your payment processing
          needs. We're excited to be part of your next big launch!
        </Text>

        <Text className="text-waterloo pb-24 pt-10 px-25 text-left">
          Best, <br />
          The PaymentsAI Team
        </Text>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
