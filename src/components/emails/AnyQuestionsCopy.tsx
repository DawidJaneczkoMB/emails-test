import type { ComponentProps } from "react";
import { Text } from "./Text";
import { Link } from "./Link";
import type OrganizationCustomizableEmailProps from "../../types/OrganizationCustomizableEmailProps";
import type { VisualCustomizationProps } from "../../types/OrganizationCustomizableEmailProps";
import { Column, Row } from "@react-email/components";
import { emailsCn } from "@/utils/cn";

export type AnyQuestionsCopyProps = ComponentProps<typeof Text> &
  Partial<Pick<OrganizationCustomizableEmailProps, "customerServiceMail">> &
  Partial<Pick<VisualCustomizationProps, "colorAccents">>;

export function AnyQuestionsCopy({
  customerServiceMail,
  colorAccents,
  className,
  ...textProps
}: AnyQuestionsCopyProps) {
  if (customerServiceMail) {
    return (
      <Row>
        <Column>
          <Text
            className={emailsCn(
              "text-body-small text-waterloo leading-small",
              className
            )}
            {...textProps}
          >
            If you have any questions, please contact us -{" "}
            <Link
              href={`mailto:${customerServiceMail}`}
              style={{ color: colorAccents }}
              className="text-body-small leading-small"
            >
              {customerServiceMail}
            </Link>
          </Text>
        </Column>
      </Row>
    );
  }
  return (
    <Row>
      <Column>
        <Text
          className={emailsCn(
            "text-body-small text-waterloo leading-small",
            className
          )}
          {...textProps}
        >
          If you have any questions, please contact us -{" "}
          <Link
            href="mailto:support@payments.ai"
            className="text-body-small leading-small"
          >
            support@payments.ai
          </Link>
        </Text>
      </Column>
    </Row>
  );
}
