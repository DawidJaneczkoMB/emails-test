import { TaxesProFeature } from "@/templates/TaxesProFeature";
import { faker } from "@faker-js/faker";

export function taxesProFeature() {
  return <TaxesProFeature taxesProUrl={faker.internet.url()} />;
}
