import { TransactionDeclinedSubsDunningLast } from "@/templates/TransactionDeclinedSubsDunningLast";
import { faker } from "@faker-js/faker";
import {
  generateOrganizationCustomization,
  generateSubscriptionData,
} from "../utils/emails/mockValues";

export function defaultEmail() {
  return (
    <TransactionDeclinedSubsDunningLast
      name={faker.person.fullName()}
      {...generateSubscriptionData()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedEmail() {
  return (
    <TransactionDeclinedSubsDunningLast
      name={faker.person.fullName()}
      {...generateSubscriptionData()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
