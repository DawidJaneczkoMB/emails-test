import type { ComponentProps } from "react";
import { Button as REButton } from "@react-email/components";

export function Button({
  className,
  ...props
}: ComponentProps<typeof REButton>) {
  return <REButton className={`font-body text-body ${className}`} {...props} />;
}
