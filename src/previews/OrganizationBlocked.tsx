import { OrganizationBlocked } from "@/templates/OrganizationBlocked";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export function organizationBlocked() {
  return (
    <OrganizationBlocked
      blockageDate={dayjs(faker.date.recent()).toString()}
      reason={faker.lorem.paragraph()}
      name={faker.person.fullName()}
    />
  );
}
