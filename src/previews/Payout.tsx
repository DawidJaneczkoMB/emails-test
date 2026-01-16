import { Payout } from "@/templates/Payout";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export function payout() {
  return (
    <Payout
      payoutReport={[
        {
          value: faker.finance.amount(),
          currency: "$",
        },
        {
          value: faker.finance.amount(),
          currency: "PLN",
        },
        {
          value: faker.finance.amount(),
          currency: "$",
        },
      ]}
      payoutDate={dayjs().toDate().toString()}
      organizationName={faker.company.name()}
      name={faker.person.fullName()}
    />
  );
}
