import { moneyFormatter } from "@/importedUtils";
import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Button } from "@/components/emails/Button";
import { Divider } from "@/components/emails/Divider";
import { DetailsTable } from "@/components/emails/DetailsTable";
import { Table } from "@/components/emails/Table";
import { TableSummary } from "@/components/emails/TableSummary";
import { Row, Column, Img } from "@react-email/components";
import type { CustomerInvoiceData } from "@/types/CustomerInvoice";
import { customerInvoiceValidationSchema } from "@/types/CustomerInvoice";
import type OrganizationCustomizableEmailProps from "@/types/OrganizationCustomizableEmailProps";
import {
  getHeadingTextFontStyleProps,
  getParagraphTextFontStyleProps,
} from "@/utils/emails/getTextProps";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";
import { emailsCn } from "@/utils/emails/cn";

type CustomerInvoiceProps = CustomerInvoiceData &
  OrganizationCustomizableEmailProps;

export function CustomerInvoice({
  customerServiceMail,
  visualCustomization,
  ...customerinvoiceInput
}: CustomerInvoiceProps) {
  const invoice = customerInvoiceValidationSchema.parse(customerinvoiceInput);

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
            You have received an invoice from{" "}
            {invoice.addressFrom.organizationName}
          </Text>
        }
        colorTextHeaders={colorTextHeaders}
        fontHeaders={fontHeaders}
        organizationCustomizable
        withLogo={false}
      >
        Hello {invoice.addressTo.firstName} {invoice.addressTo.lastName}!
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
              Invoice
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
                {invoice.addressFrom.organizationName}
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
            value: invoice.totalAmount,
            currency: invoice.currency,
          })}
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
          Due{" "}
          {invoice.dateDue &&
            new Date(invoice.dateDue).toLocaleDateString("en-US", {
              dateStyle: "medium",
            })}
        </Text>
        {invoice.paymentFormUrl && (
          <Button
            href={invoice.paymentFormUrl}
            className="w-full mx-0"
            style={{
              backgroundColor: colorAccents || "#0670f7",
            }}
          >
            Pay online
          </Button>
        )}
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
              value: `${invoice.addressTo.firstName || ""} ${
                invoice.addressTo.lastName || ""
              }`.trim(),
              label: "To",
            },
            {
              value: invoice.addressFrom.organizationName,
              label: "From",
            },
            {
              label: "Invoice number",
              value: invoice.number,
            },
            {
              value: new Date(invoice.dateOfIssue).toLocaleDateString("en-US", {
                dateStyle: "medium",
              }),
              label: "Issue date",
            },
            {
              value:
                invoice?.dateDue &&
                new Date(invoice?.dateDue)?.toLocaleDateString("en-US", {
                  dateStyle: "medium",
                }),
              label: "Due date",
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
          items={invoice.items.map((item) => [
            item.description,
            item.quantity,
            item.unitPrice &&
              moneyFormatter({
                currency: invoice.currency,
                value: item.unitPrice,
              }),
            item.taxAmount
              ? moneyFormatter({
                  currency: invoice.currency,
                  value: item.taxAmount,
                })
              : "-",
            item.amount &&
              moneyFormatter({
                currency: invoice.currency,
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
                currency: invoice.currency,
                value: invoice.subtotal,
              }),
              label: "Subtotal",
            },
            ...(invoice?.shippingFee !== undefined
              ? [
                  {
                    value: moneyFormatter({
                      value: invoice.shippingFee,
                      currency: invoice.currency,
                    }),
                    label: "Shipping fee",
                  },
                ]
              : []),
            {
              value: moneyFormatter({
                currency: invoice.currency,
                value: invoice.totalTax,
              }),
              label: "Tax",
            },
            {
              value: moneyFormatter({
                value: invoice.totalAmount,
                currency: invoice.currency,
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
