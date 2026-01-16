import { NegativeBalanceReminderPolite } from "@/templates/NegativeBalanceReminderPolite";
import { faker } from "@faker-js/faker";

export function negativeBalanceReminderPolite() {
  return (
    <NegativeBalanceReminderPolite
      updatePaymentUrl={faker.internet.url()}
      name={faker.person.firstName()}
    />
  );
}
