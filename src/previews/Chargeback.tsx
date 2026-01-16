import { Chargeback, type ChargebackDispute } from "@/templates/Chargeback";
import { faker } from "@faker-js/faker";

function generateChargebackDispute(): ChargebackDispute {
  return {
    deadline: faker.date.future().toLocaleString(),
    reasonDescription: faker.lorem.sentence(),
    amount: Number(faker.finance.amount()),
    currency: faker.finance.currencyCode(),
    transactionId: faker.string.uuid(),
    disputeId: faker.string.uuid(),
  };
}

export function chargeback() {
  return (
    <Chargeback
      disputes={Array.from({
        length: faker.number.int({
          min: 1,
          max: 5,
        }),
      }).map(generateChargebackDispute)}
      organizationId={faker.string.uuid()}
      name={faker.person.fullName()}
      appUrl={faker.internet.url()}
    />
  );
}
