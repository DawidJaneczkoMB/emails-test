import { CustomerInvoice } from "@/templates/CustomerInvoice";
import { faker } from "@faker-js/faker";
import { generateOrganizationCustomization } from "../utils/mockValues";
import type { CustomerInvoiceData } from "@/types/CustomerInvoice";
import { mockInvoiceItems } from "@/utils/mockInvoiceItems";

function getCustomerInvoiceMockData(): CustomerInvoiceData {
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
    paymentFormUrl: "https://google.com",
    documentType: "customer-invoice",
    dateOfIssue: date.toISOString(),
    dateDue: date.toISOString(),
    items,
  };
}

export function invoice() {
  return (
    <CustomerInvoice
      {...getCustomerInvoiceMockData()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedInvoice() {
  return (
    <CustomerInvoice
      {...getCustomerInvoiceMockData()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
