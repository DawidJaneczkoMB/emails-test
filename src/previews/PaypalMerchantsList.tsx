import { PaypalMerchantsList } from "@/templates/PaypalMerchantsList";
import { faker } from "@faker-js/faker";

const getTestMerchantsList = () => {
  return Array.from({
    length: faker.number.int({
      max: 10,
      min: 1,
    }),
  }).map(() => faker.string.uuid());
};

export function paypalMerchantsList() {
  return <PaypalMerchantsList merchantList={getTestMerchantsList()} />;
}
