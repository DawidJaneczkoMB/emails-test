import { CouponReceived } from "@/templates/CouponReceived";
import { faker } from "@faker-js/faker";

export function couponReceived() {
  return <CouponReceived amount={faker.number.int({ min: 10, max: 5000 })} />;
}
