import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Link } from "@/components/emails/Link";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type ImportantNoticePendingInvoiceProps = {
  username: string;
  link: string;
};

export function ImportantNoticePendingInvoice({
  username,
  link,
}: ImportantNoticePendingInvoiceProps) {
  return (
    <Main>
      <HeroSection>
        Important Notice: Pending Invoice and Account Balance Update
      </HeroSection>
      <RoundedSection>
        <Text className="text-waterloo pt-32 pb-10 px-25 text-left">
          Dear {username},
        </Text>
        <Text className="text-waterloo py-10 px-25 text-left">
          We hope this message finds you well. We are reaching out to inform you
          about an upcoming invoice that is scheduled for payment deduction from
          your linked bank account.
        </Text>
        <Text className="text-waterloo py-10 px-25 text-left">
          This invoice is associated with a negative balance in your merchant
          account, stemming from chargebacks, chargeback fees, and/or processing
          fees related to refunded transactions. It's important to note that
          when an account maintains a negative balance for an extended period
          without any new processing to offset it, the account is subject to a
          debit. For a detailed breakdown of this invoice, please refer to the
          Billing section of your Payments AI account. You can access your
          account and view the specifics{" "}
          <Link href={`${link}/dashboard/settings/billing`}>here</Link>.
        </Text>
        <Text className="text-waterloo pb-32 pt-10 px-25 text-left">
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
