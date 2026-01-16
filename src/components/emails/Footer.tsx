import getImage from "@/utils/getImage";
import { Column, Img, Row, Section } from "@react-email/components";
import { Text } from "./Text";
import { Divider } from "./Divider";

export function Footer() {
  return (
    <Row className="py-20">
      <Column align="center">
        <Divider className="pb-24" />
        <Section className="px-25 py-10">
          <Img
            src={getImage("logo-gray.png")}
            className="w-108 h-auto mx-auto"
          />
        </Section>
        <Text className="text-14 text-waterloo leading-small px-25 py-10">
          Reach all your customers, from any region of the world, without any
          restrictions. Even if you have a small online store, don&apos;t let
          location-specific functionality hold you back. Get customers and sell
          all types of products on your site.
        </Text>
        <Text className="text-14 text-waterloo leading-small px-25 py-10">
          Copyright Ⓒ {new Date().getFullYear()} Payments AI, All rights
          reserved.
        </Text>
        <Divider className="pt-24 border-t-0 border-b" />
      </Column>
    </Row>
  );
}
