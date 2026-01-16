import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { moneyFormatter } from "@/importedUtils";

type NegativeBalanceNotificationProps = {
  currency: string;
  amount: number;
  date: string;
  name: string;
};

export function NegativeBalanceNotification({
  currency,
  amount,
  name,
  date,
}: NegativeBalanceNotificationProps) {
  return (
    <Main>
      <HeroSection image="error.png">
        Important: Negative Balance on Your Merchant Account
      </HeroSection>
      <RoundedSection>
        <Text className="text-waterloo pb-10 pt-32 px-25 text-left">
          Dear {name},
        </Text>
        <Text className="text-waterloo py-10 px-25 text-left">
          We hope this message finds you well. We want to inform you that your
          merchant account with Payments AI currently has a{" "}
          <span className="font-semibold font-body">
            negative balance of {moneyFormatter({ value: amount, currency })}
          </span>
          . This balance is due to unpaid fees, refunds, or chargebacks without
          sufficient processing to cover these amounts.
        </Text>
        <Text className="text-waterloo py-10 px-25 text-left">
          To address this, we will be initiating a transfer from your linked
          bank account on{" "}
          <span className="font-semibold font-body">
            {new Date(date).toLocaleDateString()}
          </span>
          . Please note that the fees being taken are for the month of June.
          This step is essential to maintain the good standing of your account.
        </Text>
        <Text className="text-waterloo py-10 px-25 text-left">
          If you have any questions or need further assistance, please feel free
          to reach out to our support team.
        </Text>
        <Text className="text-waterloo pb-24 pt-10 px-25 text-left">
          Thank you for your prompt attention to this matter.
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
