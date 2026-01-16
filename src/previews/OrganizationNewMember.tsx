import { OrganizationNewMember } from "@/templates/OrganizationNewMember";
import { faker } from "@faker-js/faker";
import { MemberRole } from "@/types/Member";

export function organizationNewMember() {
  return (
    <OrganizationNewMember
      role={faker.helpers.arrayElement(MemberRole)}
      organizationName={faker.company.name()}
      firstName={faker.person.firstName()}
      lastName={faker.person.lastName()}
      link={faker.internet.url()}
    />
  );
}
