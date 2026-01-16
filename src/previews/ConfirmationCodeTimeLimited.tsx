import { ConfirmationCodeTimeLimited } from "@/templates/ConfirmationCodeTimeLimited";
import { faker } from "@faker-js/faker";

export function confirmationCodeTimeLimited() {
  return (
    <ConfirmationCodeTimeLimited
      code={`${faker.number.int({ min: 100, max: 999 })}-${faker.number.int({
        min: 100,
        max: 999,
      })}`}
      editPeriodMinutes={faker.helpers.arrayElement([5, 10, 15, 30, 60])}
      codeLifetimeMinutes={faker.helpers.arrayElement([5, 10, 15])}
    />
  );
}
