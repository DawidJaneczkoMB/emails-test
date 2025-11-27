import { Button, Html } from "@react-email/components";

type MyEmailProps = {
  name: string;
};

export function MyEmail({ name }: MyEmailProps) {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me {name}
      </Button>
    </Html>
  );
}
