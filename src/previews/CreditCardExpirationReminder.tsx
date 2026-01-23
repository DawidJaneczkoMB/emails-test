import { CreditCardExpirationReminder } from "@/templates/CreditCardExpirationReminder";
import { faker } from "@faker-js/faker";
import { generateOrganizationCustomization } from "../utils/emails/mockValues";

export function defaultEmail() {
  return (
    <CreditCardExpirationReminder
      name={faker.person.fullName()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedEmail() {
  return (
    <CreditCardExpirationReminder
      name={faker.person.fullName()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
