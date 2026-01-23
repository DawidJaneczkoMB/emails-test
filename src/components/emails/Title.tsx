import { emailsCn } from "@/utils/emails/cn";
import { Text } from "./Text";
import type { ComponentProps } from "react";

export function Title({ className, ...props }: ComponentProps<typeof Text>) {
  return (
    <Text
      className={emailsCn("text-h4 leading-28 pt-16", className)}
      {...props}
    />
  );
}
