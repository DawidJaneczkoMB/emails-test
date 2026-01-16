import { SubscriptionCancelled } from "@/templates/SubscriptionCancelled";
import { faker } from "@faker-js/faker";
import {
  generateOrganizationCustomization,
  generateSubscriptionData,
} from "../utils/mockValues";
import dayjs from "dayjs";

export function defaultEmail() {
  return (
    <SubscriptionCancelled
      {...generateSubscriptionData()}
      {...generateOrganizationCustomization()}
      cancelationDate={dayjs(faker.date.soon()).toString()}
      name={faker.person.fullName()}
      period="month"
    />
  );
}

export function customizedEmail() {
  return (
    <SubscriptionCancelled
      {...generateSubscriptionData()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
      cancelationDate={dayjs(faker.date.soon()).toString()}
      name={faker.person.fullName()}
      period="month"
    />
  );
}
