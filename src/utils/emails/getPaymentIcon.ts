import { CreditCardBrand } from "@/importedApi";

import type { EmailCardPaymentImages } from "./getImage";

const creditCardBrandToImageMap: Partial<
  Record<CreditCardBrand, EmailCardPaymentImages>
> = {
  [CreditCardBrand["American-Express"]]: "american-express.png",
  [CreditCardBrand["China-UnionPay"]]: "union-pay.png",
  [CreditCardBrand["Diners-Club"]]: "diners-club.png",
  [CreditCardBrand["AstroPay-Card"]]: "astropay.png",
  [CreditCardBrand.MasterCard]: "master-card.png",
  [CreditCardBrand.Discover]: "discover.png",
  [CreditCardBrand.Maestro]: "maestro.png",
  [CreditCardBrand.Voyager]: "voyager.png",
  [CreditCardBrand.Switch]: "switch.png",
};

export default function getPaymentIcon(imageBrand: CreditCardBrand) {
  if (import.meta.env.VITE_ASSETS_URL) {
    const image = creditCardBrandToImageMap[imageBrand];

    if (!image) {
      return "";
    }

    return `${import.meta.env.VITE_ASSETS_URL}/${image}`;
  }
}
