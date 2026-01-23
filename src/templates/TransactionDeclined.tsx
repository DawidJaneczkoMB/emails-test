import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import RetryTransaction from "@/components/emails/RetryTransaction";
import { Section } from "@react-email/components";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";
import type TransactionData from "@/types/TransactionData";
import {
  getHeadingTextFontStyleProps,
  getParagraphTextFontStyleProps,
} from "@/utils/emails/getTextProps";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { emailsCn } from "@/utils/emails/cn";

type TransactionDeclinedProps = {
  name: string;
} & TransactionData &
  OrganizationCustomizableEmailProps;

export function TransactionDeclined({
  customerServiceMail,
  visualCustomization,
  organizationName,
  transactionDate,
  paymentFormUrl,
  currency,
  website,
  orderId,
  amount,
  name,
}: TransactionDeclinedProps) {
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
        organizationName={organizationName}
        colorTextHeaders={colorTextHeaders}
        image="transaction-failed.png"
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
          Transaction Declined
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
          Unfortunately, your transaction was declined.
          <br />
          Please try again to complete your purchase.
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
