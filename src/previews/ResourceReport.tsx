import {
  ResourceReport,
  type ResourceReportProps,
} from "@/templates/ResourceReport";
import { generateAttachmentsData } from "@/utils/emails/mockValues";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

const previewProps: () => Omit<ResourceReportProps, "resource"> = () => ({
  dateFrom: faker.date.past().toLocaleDateString(),
  dateTo: faker.date.future().toLocaleDateString(),
  attachments: generateAttachmentsData(),
  organizationName: faker.company.name(),
  requestedDate: dayjs().toString(),
  name: faker.person.fullName(),
});

export function transactions() {
  return <ResourceReport resource="Transactions" {...previewProps()} />;
}

export function subscriptions() {
  return <ResourceReport resource="Subscriptions" {...previewProps()} />;
}
