import getImage from "@/utils/getImage";
import { Column, Hr, Img, Row } from "@react-email/components";
import { Text } from "./Text";

export function Footer() {
  return (
    <Row className="py-20">
      <Column align="center">
        <Hr className="pb-24 m-0 border-mystic" />
        <Img
          src={getImage("logo-gray.png")}
          className="w-108 h-auto px-25 py-10"
        />
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
        <Hr className="pt-24 m-0 border-t-0 border-b border-mystic" />
      </Column>
    </Row>
  );
}
