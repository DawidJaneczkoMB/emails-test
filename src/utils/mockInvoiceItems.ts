import { faker } from "@faker-js/faker";

import type { InvoiceItem } from "../types/InvoiceItem";

export function mockInvoiceItems() {
  return Array.from({
    length: faker.number.int({ max: 25, min: 1 }),
  }).map<InvoiceItem>(() => {
    const quantity = faker.number.int({ max: 100, min: 1 });
    const taxRate = faker.number.float({ multipleOf: 2, max: 10, min: 0 });
    const unitPrice = faker.number.float({ multipleOf: 2, max: 100, min: 1 });
    return {
      amount: quantity * taxRate + quantity * unitPrice,
      description: faker.commerce.productName(),
      taxAmount: quantity * taxRate,
      unitPrice,
      quantity,
    };
  });
}
