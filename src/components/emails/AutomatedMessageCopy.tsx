import type { ComponentProps } from "react";
import { Text } from "./Text";
import { Column, Row } from "@react-email/components";
import { emailsCn } from "@/utils/cn";

export type AutomatedMessageCopyProps = ComponentProps<typeof Text>;

export function AutomatedMessageCopy({
  className,
  ...textProps
}: AutomatedMessageCopyProps) {
  return (
    <Row>
      <Column align="center">
        <Text
          className={emailsCn(
            "font-semibold text-body-small text-waterloo leading-small",
            className
          )}
          {...textProps}
        >
          This is an automated message. Please do not reply to this email.
        </Text>
      </Column>
    </Row>
  );
}
