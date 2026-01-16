import { ChargeInvoicePaymentPenultimateFailure } from "@/templates/ChargeInvoicePaymentPenultimateFailure";
import { faker } from "@faker-js/faker";

export function chargeInvoicePaymentPenultimateFailure() {
  return (
    <ChargeInvoicePaymentPenultimateFailure
      daysRemaining={faker.number.int({ min: 1, max: 5 })}
      name={faker.person.fullName()}
    />
  );
}
