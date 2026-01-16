import type { VisualCustomizationProps } from "@/types/OrganizationCustomizableEmailProps";
import type { EmailImages } from "@/utils/getImage";
import { Row, Column, Img, Section } from "@react-email/components";
import type { PropsWithChildren, ReactNode } from "react";
import { Logo } from "./Logo";
import { UserLogo } from "./UserLogo";
import getImage from "@/utils/getImage";
import { Title } from "./Title";
import { getHeadingTextFontStyleProps } from "@/utils/getTextProps";
import { emailsCn } from "@/utils/cn";

type HeroSectionCustomizationProps = Partial<
  Pick<
    VisualCustomizationProps,
    "colorTextHeaders" | "illustrations" | "fontHeaders" | "logoUrl"
  >
>;

type HeroSectionProps = PropsWithChildren<
  {
    organizationCustomizable?: boolean;
    organizationName?: string;
    moreContent?: ReactNode;
    image?: EmailImages;
    withLogo?: boolean;
    imageAlt?: string;
  } & HeroSectionCustomizationProps
>;

export function HeroSection({
  organizationCustomizable = false,
  illustrations = true,
  organizationName,
  colorTextHeaders,
  withLogo = true,
  moreContent,
  fontHeaders,
  children,
  imageAlt,
  logoUrl,
  image,
}: HeroSectionProps) {
  const headingTextProps = getHeadingTextFontStyleProps(fontHeaders);

  return (
    <Row className="pb-20">
      <Column align="center">
        {withLogo &&
          (organizationCustomizable ? (
            <UserLogo
              organizationNameColor={colorTextHeaders}
              organizationName={organizationName}
              organizationFont={fontHeaders}
              logoUrl={logoUrl}
            />
          ) : (
            <Logo />
          ))}

        {image && illustrations && (
          <Section className="px-25 py-16">
            <Img
              src={getImage(image)}
              alt={imageAlt}
              className="w-215 h-auto mx-auto"
            />
          </Section>
        )}

        <Title
          style={{
            color: colorTextHeaders,
            ...headingTextProps.style,
          }}
          className={emailsCn("px-25 pt-10", headingTextProps.className)}
        >
          {children}
        </Title>
        {moreContent}
      </Column>
    </Row>
  );
}
