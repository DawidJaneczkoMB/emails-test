export type EmailCardPaymentImages =
  | "american-express.png"
  | "diners-club.png"
  | "master-card.png"
  | "union-pay.png"
  | "astropay.png"
  | "discover.png"
  | "maestro.png"
  | "voyager.png"
  | "switch.png"
  | "visa.png"
  | "jcb.png";

export type EmailImages =
  | "paymanetai-gateway-connection-success.png"
  | "paymanetai-gateway-connection-error.png"
  | "subscription-dunning-final-attempt.png"
  | "subscription-dunning-first-attempt.png"
  | "billing-failure-account-disabled.png"
  | "fees-payment-successfull.png"
  | "billing-failure-attempt.png"
  | "gateway-limit-exceeded.png"
  | "gateway-reports-logo.png"
  | "registration-success.png"
  | "payment-successfull.png"
  | "email-verification.png"
  | "transaction-failed.png"
  | EmailCardPaymentImages
  | "removed-member.png"
  | "paypal-steps.png"
  | "payout-error.png"
  | "maintenance.png"
  | "chargeback.png"
  | "periodic-review.png"
  | "logo-color.png"
  | "new-member.png"
  | "hourglass.png"
  | "kyc-issue.png"
  | "logo-gray.png"
  | "unblocked.png"
  | "blocked.png"
  | "refresh.png"
  | "payout.png"
  | "paypal.png"
  | "error.png";

export default function getImage(image: EmailImages) {
  return `${import.meta.env.VITE_ASSETS_URL}/${image}`;
}
