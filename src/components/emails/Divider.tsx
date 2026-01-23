import { emailsCn } from "@/utils/emails/cn";
import { Hr } from "@react-email/components";
import type { ComponentProps } from "react";

export function Divider({ className, ...props }: ComponentProps<typeof Hr>) {
  return <Hr className={emailsCn("m-0 border-mystic", className)} {...props} />;
}
