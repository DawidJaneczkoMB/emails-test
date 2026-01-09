import { AccessToOrganizationDeclined } from "@/templates/AccessToOrganizationDeclined";
import { faker } from "@faker-js/faker";

export function accessToOrganizationDeclined() {
  return (
    <AccessToOrganizationDeclined
      customerServiceMail={faker.internet.email()}
      organizationName={faker.company.name()}
    />
  );
}
