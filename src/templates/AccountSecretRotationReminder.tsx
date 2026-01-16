import dayjs from "dayjs";
import { Main } from "@/components/emails/Main";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Link } from "@/components/emails/Link";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

export type AccountSecretRotationReminderProps = {
  accountName: string;
  reminderSentAt: string;
};

export function AccountSecretRotationReminder({
  accountName,
  reminderSentAt,
}: AccountSecretRotationReminderProps) {
  return (
    <Main>
      <HeroSection>Mandatory Action: Account Secret Rotation</HeroSection>
      <RoundedSection>
        <Text className="text-waterloo text-left p-32">
          Dear {accountName},
          <br />
          <br />
          To meet PCI compliance requirements, all accounts using our API must
          rotate their secrets or passwords every 90 days.
          <br />
          <br />
          Please note that the rotation deadline for your account is{" "}
          {dayjs(reminderSentAt).add(7, "days").format("MMM D, YYYY")}.
          <br />
          <br />
          If you have more questions related to this process, please refer to
          our{" "}
          <Link href="https://api-docs.payments.ai/docs/get-started/tutorials/account-api-keys-guide/">
            documentation
          </Link>{" "}
          or write to our support team at{" "}
          <Link href="mailto:payments-ai-support@masterborn.com">
            payments-ai-support@masterborn.com
          </Link>
          .
          <br />
          <br />
          Best regards,
          <br />
          Payments AI Team
        </Text>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
