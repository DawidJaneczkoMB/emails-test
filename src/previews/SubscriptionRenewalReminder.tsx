import { SubscriptionRenewalReminder } from "@/templates/SubscriptionRenewalReminder";
import { faker } from "@faker-js/faker";
import { generateOrganizationCustomization } from "../utils/emails/mockValues";

export function subscriptionRenewalReminder() {
  return (
    <SubscriptionRenewalReminder
      {...generateOrganizationCustomization()}
      subscriptionEndDate={faker.date.recent().toString()}
      subscriptionLeftDays={faker.number.int()}
      currency={faker.finance.currencyCode()}
      customerName={faker.person.fullName()}
      productName={faker.commerce.product()}
      upcomingPrice={faker.number.float()}
    />
  );
}
