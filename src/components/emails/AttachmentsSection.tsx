import AttachmentsData from "@/types/AttachmentsData";
import { Text } from "./Text";
import { Divider } from "./Divider";
import { Column, Row } from "@react-email/components";
import { emailsCn } from "@/utils/emails/cn";
import { Link } from "./Link";

type AttachmentsSectionProps = AttachmentsData & {
  reportName: string;
  title?: string;
};

export function AttachmentsSection({
  reportName,
  title = "Requested documents",
  attachments,
}: AttachmentsSectionProps) {
  return (
    <>
      <Text className="text-waterloo pt-24 px-25">Report you requested:</Text>
      <Text className="font-heading pb-24 pt-10 px-25 leading-small">
        {reportName}
      </Text>
      <Divider />

      <Text className="font-heading pt-24 px-25 leading-small text-left">
        {title}
      </Text>
      {attachments.map(({ name, link }, index) => (
        <Row key={name}>
          <Column>
            <Text className="text-waterloo pt-16 px-25 text-left">{name}</Text>
            <Link
              className={emailsCn(
                "block text-blue-ribbon underline px-25 text-left",
                index === attachments.length - 1 && "pb-32"
              )}
              href={link}
              download={link}
            >
              {name}
            </Link>
          </Column>
        </Row>
      ))}
    </>
  );
}
