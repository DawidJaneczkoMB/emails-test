import { ChargeInvoicePaymentFirstFailure } from "@/templates/ChargeInvoicePaymentFirstFailure";
import { faker } from "@faker-js/faker";

export function chargeInvoicePaymentFirstFailure() {
  return (
    <ChargeInvoicePaymentFirstFailure
      daysRemaining={faker.number.int({ min: 1, max: 7 })}
      name={faker.person.fullName()}
    />
  );
}
