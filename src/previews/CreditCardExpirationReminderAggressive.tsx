import { CreditCardExpirationReminderAggressive } from "@/templates/CreditCardExpirationReminderAggressive";
import { faker } from "@faker-js/faker";
import { generateOrganizationCustomization } from "../utils/mockValues";

export function defaultEmail() {
  return (
    <CreditCardExpirationReminderAggressive
      name={faker.person.fullName()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedEmail() {
  return (
    <CreditCardExpirationReminderAggressive
      name={faker.person.fullName()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
