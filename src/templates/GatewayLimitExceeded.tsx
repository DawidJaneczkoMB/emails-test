import { Main } from "@/components/emails/Main";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Divider } from "@/components/emails/Divider";
import { Logo } from "@/components/emails/Logo";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section, Row, Column, Img } from "@react-email/components";
import getImage from "@/utils/emails/getImage";
import { AnyQuestionsCopy } from "@/components/emails/AnyQuestionsCopy";
import { AutomatedMessageCopy } from "@/components/emails/AutomatedMessageCopy";

type GatewayLimitExceededProps = {
  paymentMethod: string;
  gatewayLogo: string;
  gatewayName: string;
  limitEndsAt: string;
  limitType: string;
};

export function GatewayLimitExceeded({
  paymentMethod,
  gatewayLogo,
  gatewayName,
  limitEndsAt,
  limitType,
}: GatewayLimitExceededProps) {
  const detailsList: DetailsRow[] = [
    {
      value: gatewayName,
      name: "Gateway",
    },
    {
      name: "Payment method",
      value: paymentMethod,
    },
    {
      name: "Limit type",
      value: limitType,
    },
    {
      value: limitEndsAt,
      name: "End time",
    },
  ];

  return (
    <Main>
      <Section className="py-20">
        <Row>
          <Column align="center">
            <Logo />
            <Section className="pt-22 pb-10 px-25">
              <Img
                alt={`${gatewayName} logo`}
                src={gatewayLogo}
                className="h-auto w-80 mx-auto"
              />
            </Section>
            <Section className="py-10 px-25">
              <Img
                src={getImage("gateway-limit-exceeded.png")}
                alt="Limit exceeded image"
                className="h-auto w-280 mx-auto"
              />
            </Section>
          </Column>
        </Row>
      </Section>
      <RoundedSection>
        <Text className="font-heading text-h5 leading-23 text-center pt-32 pb-0 px-25">
          {gatewayName} gateway limit exceeded
        </Text>
        <Text className="text-body-small font-heading pb-32 leading-small pt-16 text-center px-25">
          If you want to receive transactions through this payment method,
          change the limit settings or turn it off in Gateways settings.
        </Text>
        <Divider />
        <Section className="px-25">
          <DetailsList list={detailsList} title="Details" />
        </Section>
      </RoundedSection>

      <AnyQuestionsCopy className="pt-24" />
      <AutomatedMessageCopy className="pt-24" />
    </Main>
  );
}
