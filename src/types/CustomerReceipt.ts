import * as z from "zod";

import { documentPartySchema } from "./DocumentParty";
import { invoiceItemSchema } from "./InvoiceItem";
import { paymentInstrument } from "./PaymentInstrument";

export const customerReceiptValidationSchema = z.object({
  paymentInstrument: paymentInstrument.nullable(),
  documentType: z.literal("customer-receipt"),
  dateOfPayment: z.string().nullish(),
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
export type CustomerReceiptData = z.infer<
  typeof customerReceiptValidationSchema
>;
