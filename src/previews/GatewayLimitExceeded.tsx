import { GatewayLimitExceeded } from "@/templates/GatewayLimitExceeded";
import { faker } from "@faker-js/faker";
import { gatewayLogo } from "@/utils/emails/mockValues";
import dayjs from "dayjs";

export function gatewayLimitExceeded() {
  return (
    <GatewayLimitExceeded
      limitEndsAt={dayjs(faker.date.soon()).toString()}
      limitType="Daily transaction limit"
      paymentMethod="Credit cards"
      gatewayLogo={gatewayLogo}
      gatewayName="PayPal"
    />
  );
}
