import { z } from "zod";

export const invoiceItemSchema = z.object({
  description: z.string().optional(),
  taxAmount: z.number().optional(),
  unitPrice: z.number().optional(),
  quantity: z.number().optional(),
  amount: z.number().optional(),
  taxRate: z.number().nullish(),
});
export type InvoiceItem = z.infer<typeof invoiceItemSchema>;
