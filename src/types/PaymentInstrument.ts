import { CreditCardBrand } from "@/importedApi";
import { z } from "zod";

export const paymentInstrument = z.object({
  creditCard: z
    .object({
      brand: z.enum(CreditCardBrand).optional(),
      creditCardLastFourDigits: z.string().optional(),
    })
    .optional(),
  bankAccount: z
    .object({
      bankName: z.string().nullish(),
      lastFourDigits: z.string(),
    })
    .optional(),
});
export type PaymentInstrument = z.infer<typeof paymentInstrument>;
