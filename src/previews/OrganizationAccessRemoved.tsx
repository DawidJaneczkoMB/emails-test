import { OrganizationAccessRemoved } from "@/templates/OrganizationAccessRemoved";
import { generateOrganizationCustomization } from "@/utils/emails/mockValues";

export function organizationAccessRemoved() {
  return (
    <OrganizationAccessRemoved
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
