import type { ComponentProps } from "react";
import { Button as REButton, Section } from "@react-email/components";
import { emailsCn } from "@/utils/emails/cn";

type ButtonProps = ComponentProps<typeof REButton> & {
  sectionClassName?: string;
};

export function Button({ className, sectionClassName, ...props }: ButtonProps) {
  return (
    <Section className={emailsCn("px-25 py-10", sectionClassName)}>
      <REButton
        className={emailsCn(
          "font-heading text-body-small bg-blue-ribbon text-white no-underline h-40 leading-40 w-4/5 inline-block rounded-3",
          className
        )}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      />
    </Section>
  );
}
