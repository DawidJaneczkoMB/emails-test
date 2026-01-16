import { moneyFormatter } from "@/importedUtils";
import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import { DetailsTable } from "@/components/emails/DetailsTable";
import { Table } from "@/components/emails/Table";
import { TableSummary } from "@/components/emails/TableSummary";
import { Row, Column, Img } from "@react-email/components";
import type { CustomerReceiptData } from "@/types/CustomerReceipt";
import { customerReceiptValidationSchema } from "@/types/CustomerReceipt";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";
import {
  getHeadingTextFontStyleProps,
  getParagraphTextFontStyleProps,
} from "@/utils/getTextProps";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { emailsCn } from "@/utils/cn";
import { paymentInstrumentFormatter } from "@/utils/paymentInstrumentFormatter";

type CustomerReceiptProps = CustomerReceiptData &
  OrganizationCustomizableEmailProps;

export function CustomerReceipt({
  customerServiceMail,
  visualCustomization,
  ...customerReceiptInput
}: CustomerReceiptProps) {
  const receipt = customerReceiptValidationSchema.parse(customerReceiptInput);

  const {
    colorTextParagraphs,
    colorTextHeaders,
    fontParagraphs,
    colorAccents,
    fontHeaders,
    logoUrl,
  } = visualCustomization;

  const headingTextProps = getHeadingTextFontStyleProps(fontHeaders);
  const paragraphTextProps = getParagraphTextFontStyleProps(fontParagraphs);

  return (
    <Main>
      <HeroSection
        moreContent={
          <Text
            className={emailsCn(
              "px-25 pt-10 text-center",
              paragraphTextProps.className
            )}
            style={{
              color: colorTextParagraphs,
              ...paragraphTextProps.style,
            }}
          >
            You have received a receipt from{" "}
            {receipt.addressFrom.organizationName}
          </Text>
        }
        colorTextHeaders={colorTextHeaders}
        fontHeaders={fontHeaders}
        organizationCustomizable
        withLogo={false}
      >
        Hello {receipt.addressTo.firstName} {receipt.addressTo.lastName}!
      </HeroSection>
      <RoundedSection>
        <Row className="align-top px-25 pt-30">
          <Column>
            <Text
              className={emailsCn(
                "text-h4 text-left leading-22",
                headingTextProps.className
              )}
              style={{
                color: colorTextHeaders,
                ...headingTextProps.style,
              }}
            >
              Receipt
            </Text>
          </Column>
          {logoUrl ? (
            <Column align="right">
              <Img alt="Company logo" src={logoUrl} className="w-80" />
            </Column>
          ) : (
            <Column>
              <Text
                className={emailsCn(
                  "text-h5 text-right leading-22",
                  headingTextProps.className
                )}
              >
                {receipt.addressFrom.organizationName}
              </Text>
            </Column>
          )}
        </Row>
        <Divider className="mx-24 mt-24 w-auto" />
        <Text
          className={emailsCn(
            "text-h1 leading-46 pb-0 pt-24 px-25 text-left",
            headingTextProps.className
          )}
          style={{
            color: colorTextHeaders,
            ...headingTextProps.style,
          }}
        >
          {moneyFormatter({
            value: receipt.totalAmount,
            currency: receipt.currency,
          })}
          <span
            className={emailsCn(
              "align-middle mb-12 ml-16 rounded-16 px-12 py-6 text-body bg-tara text-eucalyptus",
              paragraphTextProps.className
            )}
            style={paragraphTextProps.style}
          >
            Paid ✓
          </span>
        </Text>
        <Text
          className={emailsCn(
            "text-h6 pt-12 pb-10 px-25 text-left",
            paragraphTextProps.className
          )}
          style={{
            color: colorTextParagraphs,
            ...paragraphTextProps.style,
          }}
        >
          Paid on{" "}
          {receipt.dateOfPayment &&
            new Date(receipt.dateOfPayment)?.toLocaleDateString("en-US", {
              dateStyle: "medium",
            })}
        </Text>
        <Text
          className={emailsCn(
            "px-25 py-10 text-left",
            paragraphTextProps.className
          )}
          style={{
            color: colorTextParagraphs,
            ...paragraphTextProps.style,
          }}
        >
          Summary
        </Text>
        <DetailsTable
          details={[
            {
              value: `${receipt.addressTo.firstName || ""} ${
                receipt.addressTo.lastName || ""
              }`.trim(),
              label: "To",
            },
            {
              value: receipt.addressFrom.organizationName,
              label: "From",
            },
            {
              label: "Invoice number",
              value: receipt.number,
            },
            {
              value:
                receipt.paymentInstrument &&
                paymentInstrumentFormatter(receipt.paymentInstrument),
              iconName: receipt.paymentInstrument?.creditCard?.brand,
              label: "Payment method",
            },
            {
              value: new Date(receipt.dateOfIssue).toLocaleDateString("en-US", {
                dateStyle: "medium",
              }),
              label: "Issue date",
            },
          ]}
          fontParagraphs={fontParagraphs}
        />
        <Text
          className={emailsCn(
            "px-25 py-10 text-left",
            paragraphTextProps.className
          )}
          style={{
            color: colorTextParagraphs,
            ...paragraphTextProps.style,
          }}
        >
          Items
        </Text>
        <Table
          items={receipt.items.map((item) => [
            item.description,
            item.quantity,
            item.unitPrice &&
              moneyFormatter({
                currency: receipt.currency,
                value: item.unitPrice,
              }),
            item.taxAmount
              ? moneyFormatter({
                  currency: receipt.currency,
                  value: item.taxAmount,
                })
              : "-",
            item.amount &&
              moneyFormatter({
                currency: receipt.currency,
                value: item.amount,
              }),
          ])}
          headerItems={["Item", "Qty", "Unit price", "Tax", "Amount"]}
          fontParagraphs={fontParagraphs}
          className="pb-0"
        />
        <TableSummary
          items={[
            {
              value: moneyFormatter({
                currency: receipt.currency,
                value: receipt.subtotal,
              }),
              label: "Subtotal",
            },
            ...(receipt?.shippingFee !== undefined
              ? [
                  {
                    value: moneyFormatter({
                      value: receipt.shippingFee,
                      currency: receipt.currency,
                    }),
                    label: "Shipping fee",
                  },
                ]
              : []),
            {
              value: moneyFormatter({
                currency: receipt.currency,
                value: receipt.totalTax,
              }),
              label: "Tax",
            },
            {
              value: moneyFormatter({
                value: receipt.totalAmount,
                currency: receipt.currency,
              }),
              label: "Total",
            },
          ]}
          fontParagraphs={fontParagraphs}
          className="pb-22 pt-0"
        />
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
