import { TransactionDeclined } from "@/templates/TransactionDeclined";
import { faker } from "@faker-js/faker";
import {
  generateOrganizationCustomization,
  generateTransactionData,
} from "../utils/emails/mockValues";

export function defaultEmail() {
  return (
    <TransactionDeclined
      name={faker.person.fullName()}
      {...generateTransactionData()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedEmail() {
  return (
    <TransactionDeclined
      name={faker.person.fullName()}
      {...generateTransactionData()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
