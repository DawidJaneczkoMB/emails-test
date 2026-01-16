import type { PaymentInstrument } from "../types/PaymentInstrument";

export function paymentInstrumentFormatter(
  paymentInstrument: PaymentInstrument
): string | null {
  if (paymentInstrument.bankAccount) {
    const { bankAccount } = paymentInstrument;

    return `${bankAccount?.bankName || "Unknown bank name"} - ${
      bankAccount.lastFourDigits
    }`;
  }
  if (paymentInstrument.creditCard) {
    const { creditCard } = paymentInstrument;
    return `${creditCard.brand} •••• ${creditCard.creditCardLastFourDigits}`;
  }
  return null;
}
