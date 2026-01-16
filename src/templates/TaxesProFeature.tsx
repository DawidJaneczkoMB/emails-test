import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Button } from "@/components/emails/Button";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type TaxesProFeatureProps = { taxesProUrl: string };

export function TaxesProFeature({ taxesProUrl }: TaxesProFeatureProps) {
  return (
    <Main>
      <HeroSection image="registration-success.png">
        Preserve Your Tax Settings with PRO <br /> Upgrade
      </HeroSection>
      <RoundedSection>
        <Text className="text-waterloo pt-24 pb-0 px-25 text-left">
          Dear User,
          <br />
          <br />
          We would like to inform you that your current tax settings are now
          included in the premium features of Payments AI and will expire in 30
          days. To continue enjoying these settings without interruption, we
          encourage you to consider upgrading to our PRO version. This update
          not only secures your settings, but also offers improved quality
          features for a better experience.
          <br />
          <br />
          Best Regards,
          <br />
          PaymentsAI Team
        </Text>
        <Button
          href={taxesProUrl}
          sectionClassName="pt-26 pb-32"
          className="w-full"
        >
          Explore PRO Features
        </Button>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
