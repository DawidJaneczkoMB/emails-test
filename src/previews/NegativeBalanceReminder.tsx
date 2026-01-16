import { NegativeBalanceReminder } from "@/templates/NegativeBalanceReminder";
import { faker } from "@faker-js/faker";

export function negativeBalanceReminder() {
  return (
    <NegativeBalanceReminder
      updatePaymentUrl={faker.internet.url()}
      name={faker.person.firstName()}
    />
  );
}
