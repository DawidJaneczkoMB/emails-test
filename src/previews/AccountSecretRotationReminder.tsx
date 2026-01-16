import { AccountSecretRotationReminder } from "@/templates/AccountSecretRotationReminder";
import { faker } from "@faker-js/faker";

export function accountSecretRotationReminder() {
  return (
    <AccountSecretRotationReminder
      accountName={faker.company.name()}
      reminderSentAt={faker.date.recent().toISOString()}
    />
  );
}
