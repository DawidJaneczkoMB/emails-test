import { RegistrationSuccessWithoutGateway } from "@/templates/RegistrationSuccessWithoutGateway";
import { faker } from "@faker-js/faker";

export function registrationSuccessWithoutGateway() {
  return <RegistrationSuccessWithoutGateway appUrl={faker.internet.url()} />;
}
