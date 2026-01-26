import * as z from "zod";

import { documentPartySchema } from "./DocumentParty";
import { invoiceItemSchema } from "./InvoiceItem";

export const customerInvoiceValidationSchema = z.object({
  documentType: z.literal("customer-invoice"),
  paymentFormUrl: z.string().nullish(),
  shippingFee: z.number().optional(),
  addressFrom: documentPartySchema,
  items: invoiceItemSchema.array(),
  addressTo: documentPartySchema,
  dateDue: z.string().nullish(),
  dateOfIssue: z.string(),
  totalAmount: z.number(),
  currency: z.string(),
  subtotal: z.number(),
  totalTax: z.number(),
  number: z.string(),
});
export type CustomerInvoiceData = z.infer<
  typeof customerInvoiceValidationSchema
>;
