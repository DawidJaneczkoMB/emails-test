import { PeriodicReview } from "@/templates/PeriodicReview";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export function general() {
  return (
    <PeriodicReview
      actionLimitInDays={30}
      dueDate={dayjs().add(30, "day").toISOString()}
      organizationGatewayUrl={`https://app.payments.ai/organizations/${faker.string.uuid()}/gateways/default`}
    />
  );
}

export function final() {
  return (
    <PeriodicReview
      actionLimitInDays={3}
      dueDate={dayjs().add(3, "day").toISOString()}
      organizationGatewayUrl={`https://app.payments.ai/organizations/${faker.string.uuid()}/gateways/default`}
    />
  );
}
