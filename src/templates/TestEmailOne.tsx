import { Main } from "@/components/emails/Main";
import getImage from "@/utils/getImage";
import { Column, Img, Row, Section } from "@react-email/components";
import { Button } from "@/components/emails/Button";
import { Text } from "@/components/emails/Text";

type MyEmailProps = {
  name: string;
};

export function TestEmailOne({ name }: MyEmailProps) {
  return (
    <Main>
      <Section className="border border-gray-400 rounded-md text-center p-20">
        <Row className="mb-32">
          <Column align="center">
            <Img className="max-w-100" src={getImage("logo-color.png")} />
          </Column>
        </Row>
        <Text className="text-h3 m-0 mb-32">
          Hello <b>{name}</b>!
        </Text>
        <Button
          className="text-body bg-aconite-purple text-white rounded-full px-16 py-8"
          href="https://www.google.com"
        >
          Click me!
        </Button>
      </Section>
    </Main>
  );
}
