import { TaxReport } from "@/templates/TaxReport";
import { generateAttachmentsData } from "@/utils/emails/mockValues";
import { faker } from "@faker-js/faker";

export function taxReport() {
  return (
    <TaxReport
      dateFrom={Array.from({ length: 3 }).map(() =>
        faker.date.past().toLocaleDateString()
      )}
      dateTo={Array.from({ length: 3 }).map(() =>
        faker.date.future().toLocaleDateString()
      )}
      attachments={generateAttachmentsData()}
      name={faker.person.fullName()}
      report="Tax"
    />
  );
}
