import { CustomerReceipt } from "@/templates/CustomerReceipt";
import { faker } from "@faker-js/faker";
import { generateOrganizationCustomization } from "../utils/emails/mockValues";
import type { CustomerReceiptData } from "@/types/CustomerReceipt";
import { mockInvoiceItems } from "@/utils/emails/mockInvoiceItems";

function getCustomerReceiptMockData(): CustomerReceiptData {
  const date = faker.date.recent();
  const items = mockInvoiceItems();

  return {
    addressFrom: {
      address: faker.location.streetAddress(),
      organizationName: faker.company.name(),
      country: faker.location.countryCode(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      zip: faker.location.zipCode(),
      email: faker.internet.email(),
      city: faker.location.city(),
    },
    addressTo: {
      address: faker.location.streetAddress(),
      country: faker.location.countryCode(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      zip: faker.location.zipCode(),
      email: faker.internet.email(),
      city: faker.location.city(),
    },
    paymentInstrument: {
      creditCard: {
        creditCardLastFourDigits: faker.number
          .int({ min: 1000, max: 9999 })
          .toString(),
        brand: "American-Express",
      },
    },
    totalAmount: items.reduce(
      (acc, item) => acc + (Number(item.amount) + Number(item.taxAmount)),
      0
    ),
    number: faker.number
      .int({
        max: Number.MAX_SAFE_INTEGER,
        min: 1,
      })
      .toString(),
    subtotal: items.reduce(
      (acc, item) => acc + Number(item.unitPrice) * Number(item.quantity),
      0
    ),
    totalTax: items.reduce((acc, item) => acc + Number(item.taxAmount), 0),
    currency: faker.finance.currencyCode(),
    dateOfPayment: date.toISOString(),
    documentType: "customer-receipt",
    dateOfIssue: date.toISOString(),
    dateDue: date.toISOString(),
    items,
  };
}

export function receipt() {
  return (
    <CustomerReceipt
      {...getCustomerReceiptMockData()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedReceipt() {
  return (
    <CustomerReceipt
      {...getCustomerReceiptMockData()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
