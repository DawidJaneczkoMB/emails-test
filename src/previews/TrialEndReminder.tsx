import { TrialEndReminder } from "@/templates/TrialEndReminder";
import { faker } from "@faker-js/faker";
import {
  generateOrganizationCustomization,
  generateSubscriptionData,
} from "../utils/emails/mockValues";
import dayjs from "dayjs";

export function defaultEmail() {
  return (
    <TrialEndReminder
      timeLeft={`${faker.number.int({
        min: 1,
        max: 5,
      })} days`}
      nextCharge={dayjs(faker.date.soon()).toString()}
      name={faker.person.fullName()}
      {...generateSubscriptionData()}
      {...generateOrganizationCustomization()}
    />
  );
}

export function customizedEmail() {
  return (
    <TrialEndReminder
      timeLeft={`${faker.number.int({
        min: 1,
        max: 5,
      })} days`}
      nextCharge={dayjs(faker.date.soon()).toString()}
      name={faker.person.fullName()}
      {...generateSubscriptionData()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
