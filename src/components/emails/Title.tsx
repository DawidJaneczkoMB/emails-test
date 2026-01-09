import { Text } from "./Text";
import type { ComponentProps } from "react";

export function Title({ className, ...props }: ComponentProps<typeof Text>) {
  return (
    <Text
      className={`text-h4 font-medium leading-28 pt-16 ${className ?? ""}`}
      {...props}
    />
  );
}
