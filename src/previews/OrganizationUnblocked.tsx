import { OrganizationUnblocked } from "@/templates/OrganizationUnblocked";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export function organizationUnblocked() {
  return (
    <OrganizationUnblocked
      unblockageDate={dayjs(faker.date.recent()).toString()}
      reason={faker.lorem.paragraph()}
      name={faker.person.fullName()}
    />
  );
}
