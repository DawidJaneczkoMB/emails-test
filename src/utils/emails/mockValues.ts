import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

import type OrganizationCustomizableEmailProps from "../../types/OrganizationCustomizableEmailProps";
import type { VisualCustomizationProps } from "../../types/OrganizationCustomizableEmailProps";
import type SubscriptionData from "../../types/SubscriptionData";
import type TransactionData from "../../types/TransactionData";

const testUserLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEr48k0OMIo3PcMNvwya5MdGvNyZCBqkX4ILxK2WTwUWJlrphxBYiHwH8LJ4O1DjMMoY&usqp=CAU";
export const gatewayLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kYr1vVJLtN8WQ9UToXVk4Z5xUBsl7hh22w&usqp=CAU";

// Default values we get from the backend for the visual customization email template
const visualCustomizationDefaultValues: VisualCustomizationProps = {
  fontParagraphs: "Source Sans Pro",
  colorTextParagraphs: "#7D8190",
  colorTextHeaders: "#263746",
  colorAccents: "#1E88E5",
  fontHeaders: "Ubuntu",
  illustrations: true,
  logoUrl: null,
};

const visualCustomizationUpdatedValues: VisualCustomizationProps = {
  fontParagraphs: "CourierNewPSMT",
  colorTextParagraphs: "#A39245",
  colorTextHeaders: "#930535",
  fontHeaders: "Helvetica",
  colorAccents: "#559900",
  logoUrl: testUserLogo,
  illustrations: false,
};

const getCustomizationValues = (withCustomization?: boolean) =>
  withCustomization
    ? visualCustomizationUpdatedValues
    : visualCustomizationDefaultValues;

export const generateMonthYear = () =>
  dayjs(faker.date.past()).format("MMMM YYYY");

export const generateTransactionData: () => TransactionData = () => ({
  transactionDate: dayjs(faker.date.recent()).toString(),
  currency: faker.finance.currencyCode(),
  website: faker.internet.domainName(),
  paymentFormUrl: faker.internet.url(),
  amount: faker.finance.amount(),
  orderId: faker.string.uuid(),
});

export const generateSubscriptionData: () => SubscriptionData = () => ({
  ...generateTransactionData(),
  nextRetryDate: dayjs(faker.date.soon()).toString(),
  productName: faker.commerce.productName(),
  planName: faker.commerce.department(),
  paymentFormUrl: faker.internet.url(),
});

export const generateOrganizationCustomization = (props?: {
  withCustomization?: boolean;
}) =>
  ({
    visualCustomization: getCustomizationValues(props?.withCustomization),
    customerServiceMail: faker.internet.email(),
    organizationName: faker.company.name(),
  } as OrganizationCustomizableEmailProps);

export const generateAttachmentsData = () =>
  Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
    name: faker.system.fileName(),
    link: faker.internet.url(),
  }));
