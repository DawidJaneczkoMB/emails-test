import { CreditCardExpirationReminderPolite } from "@/templates/CreditCardExpirationReminderPolite";
import { faker } from "@faker-js/faker";
import { generateOrganizationCustomization } from "../utils/mockValues";

export function defaultEmail() {
  return (
    <CreditCardExpirationReminderPolite
      name={faker.person.fullName()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedEmail() {
  return (
    <CreditCardExpirationReminderPolite
      name={faker.person.fullName()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
