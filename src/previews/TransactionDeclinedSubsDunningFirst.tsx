import { TransactionDeclinedSubsDunningFirst } from "@/templates/TransactionDeclinedSubsDunningFirst";
import { faker } from "@faker-js/faker";
import {
  generateOrganizationCustomization,
  generateSubscriptionData,
} from "../utils/emails/mockValues";

export function defaultEmail() {
  return (
    <TransactionDeclinedSubsDunningFirst
      totalAttempts={faker.number.int({
        min: 1,
        max: 3,
      })}
      name={faker.person.fullName()}
      {...generateSubscriptionData()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedEmail() {
  return (
    <TransactionDeclinedSubsDunningFirst
      totalAttempts={faker.number.int({
        min: 1,
        max: 3,
      })}
      name={faker.person.fullName()}
      {...generateSubscriptionData()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
