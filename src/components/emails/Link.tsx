import { Link as RELink } from "@react-email/components";
import type { ComponentProps } from "react";

export function Link({ className, ...props }: ComponentProps<typeof RELink>) {
  return (
    <RELink
      className={`font-body text-body text-blue-ribbon ${className ?? ""}`}
      {...props}
    />
  );
}
