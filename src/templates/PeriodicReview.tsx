import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { PeriodicReviewCopy } from "@/components/emails/PeriodicReviewCopy";

type PeriodicReviewProps = {
  actionLimitInDays: number;
  dueDate: string;
  organizationGatewayUrl: string;
};

export function PeriodicReview({
  organizationGatewayUrl,
  ...props
}: PeriodicReviewProps) {
  return (
    <Main>
      <HeroSection image="periodic-review.png">
        Action required: complete your periodic review
      </HeroSection>
      <Section className="py-20">
        <Section className="p-32 border-b border-mystic">
          <Text className="text-waterloo text-14 text-left leading-small font-heading">
            Dear User,
            <br />
            <br />
            <PeriodicReviewCopy {...props} />
            <br />
            <br />
            Best regards,
            <br />
            The Payments AI Team
          </Text>
          <Button
            href={organizationGatewayUrl}
            sectionClassName="pt-10 px-0"
            className="w-full"
          >
            Complete review
          </Button>
        </Section>

        <AnyQuestionsCopy className="pt-24" />
      </Section>
    </Main>
  );
}
