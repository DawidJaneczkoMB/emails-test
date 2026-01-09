import { Theme } from "@/utils/theme";
import { Html, Section, Tailwind } from "@react-email/components";
import { PropsWithChildren } from "react";
import { Head } from "./Head";
import { Footer } from "./Footer";
import { TermsAndConditions } from "./TermsAndConditions";

type MainLayoutProps = {
  withFooter?: boolean;
  withTerms?: boolean;
};

export function Main({
  withFooter = true,
  withTerms = true,
  children,
}: PropsWithChildren<MainLayoutProps>) {
  return (
    <Html>
      <Head />
      <Tailwind config={{ theme: { extend: Theme } }}>
        <Section className="border border-mystic rounded-xs text-center p-20 m-0 max-w-600">
          {children}
        </Section>
        {withFooter && <Footer />}
        {withTerms && <TermsAndConditions />}
      </Tailwind>
    </Html>
  );
}
