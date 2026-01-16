import { OrganizationAccessRemoved } from "@/templates/OrganizationAccessRemoved";
import { generateOrganizationCustomization } from "@/utils/mockValues";

export function organizationAccessRemoved() {
  return (
    <OrganizationAccessRemoved
      {...generateOrganizationCustomization({
        withCustomization: true,
      })}
    />
  );
}
