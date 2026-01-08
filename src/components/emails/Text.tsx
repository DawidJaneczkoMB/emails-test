import { Text as REText } from "@react-email/components";
import type { ComponentProps } from "react";

export function Text({ className, ...props }: ComponentProps<typeof REText>) {
  return (
    <REText
      className={`font-body text-body text-pickled-bluewood m-0 ${className}`}
      {...props}
    />
  );
}
