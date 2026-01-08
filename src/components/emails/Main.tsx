import { Theme } from "@/utils/theme";
import { Html, Section, Tailwind } from "@react-email/components";
import { PropsWithChildren } from "react";
import { Head } from "./Head";

export function Main({ children }: PropsWithChildren) {
  return (
    <Html>
      <Head />
      <Tailwind config={{ theme: { extend: Theme } }}>
        <Section className="border border-mystic rounded-xs text-center p-20 m-0 max-w-600">
          {children}
        </Section>
      </Tailwind>
    </Html>
  );
}
