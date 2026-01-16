import { AccessToOrganizationRequest } from "@/templates/AccessToOrganizationRequest";
import { faker } from "@faker-js/faker";

export function accessToOrganizationRequest() {
  return (
    <AccessToOrganizationRequest
      organizationMembersUrl={faker.internet.url()}
      organizationName={faker.company.name()}
      name={faker.person.fullName()}
    />
  );
}
