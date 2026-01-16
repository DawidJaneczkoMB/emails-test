import { emailsCn } from "@/utils/cn";
import { Link as RELink } from "@react-email/components";
import type { ComponentProps } from "react";

export function Link({ className, ...props }: ComponentProps<typeof RELink>) {
  return (
    <RELink
      className={emailsCn("font-body text-body text-blue-ribbon", className)}
      {...props}
    />
  );
}
