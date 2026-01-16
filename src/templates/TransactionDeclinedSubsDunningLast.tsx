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
} from "@/utils/getTextProps";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { emailsCn } from "@/utils/cn";

type TransactionDeclinedSubsDunningLastProps = {
  name: string;
} & SubscriptionData &
  OrganizationCustomizableEmailProps;

export function TransactionDeclinedSubsDunningLast({
  customerServiceMail,
  visualCustomization,
  organizationName,
  transactionDate,
  paymentFormUrl,
  productName,
  planName,
  currency,
  website,
  orderId,
  amount,
  name,
}: TransactionDeclinedSubsDunningLastProps) {
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
  ];

  return (
    <Main>
      <HeroSection
        image="subscription-dunning-final-attempt.png"
        organizationName={organizationName}
        colorTextHeaders={colorTextHeaders}
        illustrations={illustrations}
        fontHeaders={fontHeaders}
        organizationCustomizable
        logoUrl={logoUrl}
      >
        {name}, we have cancelled your subscription!
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
          Last Billing Attempt Failure
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
          Unfortunately, despite many attempt we were unable to charge you for
          the subscription.
          <br />
          <br />
          <strong>Your subscription will be cancelled.</strong>
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
