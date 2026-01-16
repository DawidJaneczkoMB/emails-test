import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { RoundedSection } from "@/components/emails/RoundedSection";
import { Text } from "@/components/emails/Text";
import { Button } from "@/components/emails/Button";
import { Divider } from "@/components/emails/Divider";
import DetailsList, { type DetailsRow } from "@/components/emails/DetailsList";
import { Section } from "@react-email/components";
import type { GatewayLoggingEventType } from "@/types/GatewayLoggingEvent";
import { generateLabelFromGatewayUpdateEvent } from "@/utils/generateLabelFromGatewayUpdateEvent";

type GatewayImportantUpdateProps = {
  actionType: GatewayLoggingEventType;
  organizationName: string;
  gatewayName: string;
  gatewayLink: string;
  name: string;
  date: string;
};

export function GatewayImportantUpdate({
  organizationName,
  gatewayName,
  gatewayLink,
  actionType,
  name,
  date,
}: GatewayImportantUpdateProps) {
  const detailsList: DetailsRow[] = [
    {
      name: "Date",
      value: date,
    },
    {
      name: "User name",
      value: name,
    },
    {
      name: "Organization name",
      value: organizationName,
    },
    {
      value: generateLabelFromGatewayUpdateEvent(actionType),
      name: "Action type",
    },
  ];

  return (
    <Main>
      <HeroSection organizationName={organizationName} image="error.png">
        Important: Update in {gatewayName} <br /> Gateway
      </HeroSection>
      <RoundedSection>
        <Text className="font-heading text-h5 leading-23 text-center pt-32 pb-0 px-25">
          Important update alert
        </Text>
        <Text className="text-waterloo pb-24 pt-10 text-center px-25">
          An important change to your Gateway settings was made by a member of
          your organization,
          {name}. You can log in to the app and review the update by clicking
          the button below.
        </Text>
        <Divider />
        <Section className="px-25">
          <DetailsList title="Update details" list={detailsList} />
          <Button
            href={gatewayLink}
            sectionClassName="px-0 pt-0 pb-36"
            className="w-full"
          >
            Go to Gateways
          </Button>
        </Section>
      </RoundedSection>
    </Main>
  );
}
