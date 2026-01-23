import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import RetryTransaction from "@/components/emails/RetryTransaction";
import { Section } from "@react-email/components";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";
import type SubscriptionData from "@/types/SubscriptionData";
import {
  getHeadingTextFontStyleProps,
  getParagraphTextFontStyleProps,
} from "@/utils/emails/getTextProps";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { emailsCn } from "@/utils/emails/cn";

type TransactionDeclinedSubsDunningMiddleProps = {
  attemptsLeft: string | number;
  name: string;
} & SubscriptionData &
  OrganizationCustomizableEmailProps;

export function TransactionDeclinedSubsDunningMiddle({
  customerServiceMail,
  visualCustomization,
  organizationName,
  transactionDate,
  paymentFormUrl,
  nextRetryDate,
  attemptsLeft,
  productName,
  planName,
  currency,
  website,
  orderId,
  amount,
  name,
}: TransactionDeclinedSubsDunningMiddleProps) {
  const {
    colorTextParagraphs,
    colorTextHeaders,
    fontParagraphs,
    illustrations,
    colorAccents,
    fontHeaders,
    logoUrl,
  } = visualCustomization;

  const headingTextProps = getHeadingTextFontStyleProps(fontHeaders);
  const paragraphTextProps = getParagraphTextFontStyleProps(fontParagraphs);

  const detailsList: DetailsRow[] = [
    {
      name: "Website",
      value: website,
    },
    {
      value: orderId,
      name: "Order",
    },
    {
      value: `${planName} - ${productName}`,
      name: "Product",
    },
    {
      value: transactionDate,
      name: "Date",
    },
    {
      value: `${amount} ${currency}`,
      name: "Amount",
    },
    {
      valueTextProps: {
        className: "text-parsimmon",
      },
      value: nextRetryDate,
      name: "Next retry",
    },
    {
      valueTextProps: {
        className: "text-parsimmon",
      },
      name: "Attempts left",
      value: attemptsLeft,
    },
  ];

  return (
    <Main>
      <HeroSection
        image="subscription-dunning-first-attempt.png"
        organizationName={organizationName}
        colorTextHeaders={colorTextHeaders}
        illustrations={illustrations}
        fontHeaders={fontHeaders}
        organizationCustomizable
        logoUrl={logoUrl}
      >
        Hello {name}!
      </HeroSection>
      <RoundedSection>
        <Text
          className={emailsCn(
            "text-h4 leading-23 pt-32 pb-0 text-center px-25",
            headingTextProps.className
          )}
          style={{
            color: colorTextHeaders,
            ...headingTextProps.style,
          }}
        >
          Subscription Billing Attempt Failure
        </Text>
        <Text
          className={emailsCn(
            "pb-14 pt-10 text-center px-25",
            paragraphTextProps.className
          )}
          style={{
            color: colorTextParagraphs,
            ...paragraphTextProps.style,
          }}
        >
          We were unable to process your subscription payment.
        </Text>
        <Text
          className={emailsCn(
            "pb-24 pt-10 text-center px-25",
            paragraphTextProps.className
          )}
          style={{
            color: colorTextParagraphs,
            ...paragraphTextProps.style,
          }}
        >
          Please update your billing information to prevent{" "}
          <strong>subscription cancellation</strong>.
        </Text>
        <Divider />
        <Section className="px-25">
          <DetailsList
            fontParagraphs={fontParagraphs}
            title="Transaction details"
            fontHeaders={fontHeaders}
            list={detailsList}
          />
        </Section>
        {paymentFormUrl && (
          <>
            <Divider />
            <RetryTransaction
              colorTextHeaders={colorTextHeaders}
              retryHref={paymentFormUrl}
              fontHeaders={fontHeaders}
            />
          </>
        )}
      </RoundedSection>

      <AnyQuestionsCopy
        className="pt-24"
        colorAccents={colorAccents}
        customerServiceMail={customerServiceMail}
      />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
