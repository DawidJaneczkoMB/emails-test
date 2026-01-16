import { NegativeBalanceReminderAggressive } from "@/templates/NegativeBalanceReminderAggressive";
import { faker } from "@faker-js/faker";

export function negativeBalanceReminderAggressive() {
  return (
    <NegativeBalanceReminderAggressive
      updatePaymentUrl={faker.internet.url()}
      name={faker.person.firstName()}
    />
  );
}
