import { emailsCn } from "@/utils/emails/cn";
import { Section } from "@react-email/components";
import type { ComponentProps } from "react";

export function RoundedSection({
  className,
  ...props
}: ComponentProps<typeof Section>) {
  return (
    <Section className="pt-20">
      <Section
        className={emailsCn("border border-mystic rounded-4", className)}
        {...props}
      />
    </Section>
  );
}
