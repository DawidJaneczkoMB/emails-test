import { Column, Row } from "@react-email/components";
import { Link } from "./Link";

export function TermsAndConditions() {
  return (
    <Row className="pb-20">
      <Column align="center" className="px-25 py-10 w-1/2">
        <Link
          href="https://app.payments.ai/terms-and-conditions.pdf"
          className="text-small"
        >
          Terms and Conditions
        </Link>
      </Column>
      <Column align="center" className="px-25 py-10 w-1/2">
        <Link
          href="https://app.payments.ai/privacy-policy.pdf"
          className="text-small"
        >
          Privacy Policy
        </Link>
      </Column>
    </Row>
  );
}
