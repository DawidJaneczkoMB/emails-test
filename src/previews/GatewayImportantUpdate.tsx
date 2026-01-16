import { GatewayImportantUpdate } from "@/templates/GatewayImportantUpdate";
import { faker } from "@faker-js/faker";
import { GatewayLoggingEvent } from "@/types/GatewayLoggingEvent";

export function gatewayImportantUpdate() {
  return (
    <GatewayImportantUpdate
      actionType={GatewayLoggingEvent.COINBASE_3D_SECURE_DISABLED}
      date={faker.date.recent().toISOString()}
      organizationName={faker.company.name()}
      gatewayLink={faker.internet.url()}
      name={faker.person.fullName()}
      gatewayName="Stripe"
    />
  );
}
