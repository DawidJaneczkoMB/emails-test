import { PaymentConfirmation } from "@/templates/PaymentConfirmation";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export function paymentConfirmation() {
  return (
    <PaymentConfirmation
      invoiceDate={dayjs(faker.date.recent()).toString()}
      currency={faker.finance.currencyCode()}
      amount={faker.finance.amount()}
      invoiceId={faker.string.uuid()}
      name={faker.person.fullName()}
    />
  );
}
