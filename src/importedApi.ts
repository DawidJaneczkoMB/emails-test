export type CreditCardBrand =
  | "American-Express"
  | "China-UnionPay"
  | "AstroPay-Card"
  | "Diners-Club"
  | "MasterCard"
  | "Discover"
  | "Electron"
  | "Maestro"
  | "Voyager"
  | "Switch"
  | "Laser"
  | "Visa"
  | "Solo"
  | "JCB";
export const CreditCardBrand: { [K in CreditCardBrand]: K } = {
  "American-Express": "American-Express",
  "China-UnionPay": "China-UnionPay",
  "AstroPay-Card": "AstroPay-Card",
  "Diners-Club": "Diners-Club",
  MasterCard: "MasterCard",
  Discover: "Discover",
  Electron: "Electron",
  Maestro: "Maestro",
  Voyager: "Voyager",
  Switch: "Switch",
  Laser: "Laser",
  Visa: "Visa",
  Solo: "Solo",
  JCB: "JCB",
};
