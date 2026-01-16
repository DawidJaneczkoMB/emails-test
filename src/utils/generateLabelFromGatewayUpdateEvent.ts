import type { GatewayLoggingEventType } from "../types/GatewayLoggingEvent";
import * as R from "remeda";

const preserveUppercaseWords = ["3d", "nmi", "id"];

export function generateLabelFromGatewayUpdateEvent(
  event: GatewayLoggingEventType
): string {
  return event
    .split("-")
    .map((word) => {
      const lower = R.toLowerCase(word);
      if (preserveUppercaseWords.includes(lower)) {
        return R.toUpperCase(lower);
      }
      return R.capitalize(word);
    })
    .join(" ");
}
