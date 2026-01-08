import { Main } from "@/components/emails/Main";
import { Button } from "@/components/emails/Button";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Section } from "@react-email/components";

type MyEmailProps = {
  name: string;
};

export function TestEmailOne({ name }: MyEmailProps) {
  return (
    <Main>
      <HeroSection image="registration-success.png">Hello {name}!</HeroSection>
      <Section>
        <Text className="text-waterloo pb-16">Welcome to Payments AI!</Text>
        <Button
          className="text-body bg-blue-ribbon text-white rounded-full px-16 py-8"
          href={`https://www.google.com/search?q=${name}`}
        >
          Click me!
        </Button>
      </Section>
    </Main>
  );
}
