import { NegativeBalanceNotification } from "@/templates/NegativeBalanceNotification";
import { faker } from "@faker-js/faker";

export function negativeBalanceNotification() {
  return (
    <NegativeBalanceNotification
      date={faker.date.recent().toISOString()}
      amount={Number(faker.finance.amount())}
      currency={faker.finance.currencyCode()}
      name={faker.person.fullName()}
    />
  );
}
