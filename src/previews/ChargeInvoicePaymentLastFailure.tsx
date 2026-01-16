import { ChargeInvoicePaymentLastFailure } from "@/templates/ChargeInvoicePaymentLastFailure";
import { faker } from "@faker-js/faker";

export function chargeInvoicePaymentLastFailure() {
  return <ChargeInvoicePaymentLastFailure name={faker.person.fullName()} />;
}
