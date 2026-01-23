import { OrganizationRemovedMember } from "@/templates/OrganizationRemovedMember";
import { faker } from "@faker-js/faker";
import { generateOrganizationCustomization } from "@/utils/emails/mockValues";

export function organizationRemovedMember() {
  return (
    <OrganizationRemovedMember
      firstName={faker.person.firstName()}
      lastName={faker.person.lastName()}
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
