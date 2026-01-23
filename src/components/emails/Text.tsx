import { emailsCn } from "@/utils/emails/cn";
import { Text as REText } from "@react-email/components";
import type { ComponentProps } from "react";

export function Text({ className, ...props }: ComponentProps<typeof REText>) {
  return (
    <REText
      className={emailsCn(
        "font-body text-body leading-20! text-pickled-bluewood m-0",
        className
      )}
      {...props}
    />
  );
}
