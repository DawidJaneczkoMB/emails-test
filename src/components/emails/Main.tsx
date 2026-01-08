import { Theme } from "@/utils/theme";
import { Html, Tailwind } from "@react-email/components";
import { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren) {
  return (
    <Html style={{ fontSize: "10px" }}>
      <Tailwind config={{ theme: { extend: Theme } }}>{children}</Tailwind>
    </Html>
  );
}
