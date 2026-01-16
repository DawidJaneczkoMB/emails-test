import { AccessToOrganizationGranted } from "@/templates/AccessToOrganizationGranted";
import { faker } from "@faker-js/faker";

export function accessToOrganizationGranted() {
  return (
    <AccessToOrganizationGranted
      organizationName={faker.company.name()}
      organizationDashboardUrl={faker.internet.url()}
    />
  );
}
