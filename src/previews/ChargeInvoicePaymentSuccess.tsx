import { ChargeInvoicePaymentSuccess } from "@/templates/ChargeInvoicePaymentSuccess";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export function chargeInvoicePaymentSuccess() {
  return (
    <ChargeInvoicePaymentSuccess
      amount={faker.finance.amount()}
      invoiceDate={dayjs(faker.date.recent()).toString()}
      invoiceId={faker.string.uuid()}
      currency={faker.finance.currencyCode()}
      name={faker.person.fullName()}
    />
  );
}
