import { OrganizationInvitation } from "@/templates/OrganizationInvitation";
import { faker } from "@faker-js/faker";
import { MemberRole } from "@/types/Member";

export function organizationInvitation() {
  return (
    <OrganizationInvitation
      role={faker.helpers.arrayElement(MemberRole)}
      customerServiceMail={faker.internet.email()}
      organizationName={faker.company.name()}
      invitationLink="https://google.com"
    />
  );
}
