import { ChargeInvoicePaymentMiddleFailure } from "@/templates/ChargeInvoicePaymentMiddleFailure";
import { faker } from "@faker-js/faker";

export function chargeInvoicePaymentMiddleFailure() {
  return (
    <ChargeInvoicePaymentMiddleFailure
      daysRemaining={faker.number.int({ min: 1, max: 5 })}
      name={faker.person.fullName()}
    />
  );
}
