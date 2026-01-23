import { Theme } from "@/utils/emails/theme";
import { Html, Section, Tailwind } from "@react-email/components";
import { PropsWithChildren } from "react";
import { Head } from "./Head";
import { Footer } from "./Footer";
import { TermsAndConditions } from "./TermsAndConditions";
import { emailsCn } from "@/utils/emails/cn";

type MainLayoutProps = {
  withFooter?: boolean;
  withTerms?: boolean;
  withWrapper?: boolean;
};

export function Main({
  withFooter = true,
  withTerms = true,
  withWrapper = true,
  children,
}: PropsWithChildren<MainLayoutProps>) {
  return (
    <Html>
      <Head />
      <Tailwind config={{ theme: { extend: Theme } }}>
        <Section className="m-0 max-w-600 mx-auto">
          <Section
            className={emailsCn(
              "text-center p-24",
              withWrapper && "border border-mystic rounded-xs"
            )}
          >
            {children}
          </Section>
          {withFooter && <Footer />}
          {withTerms && <TermsAndConditions />}
        </Section>
      </Tailwind>
    </Html>
  );
}
