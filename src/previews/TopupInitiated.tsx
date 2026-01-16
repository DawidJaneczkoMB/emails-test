import { TopupInitiated } from "@/templates/TopupInitiated";
import { faker } from "@faker-js/faker";

export function topupInitiated() {
  return (
    <TopupInitiated
      date={faker.date.past().toLocaleDateString()}
      currency={faker.finance.currencyCode()}
      href={faker.internet.domainName()}
      name={faker.company.name()}
      amount={faker.number.int()}
    />
  );
}
