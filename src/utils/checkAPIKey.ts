
import crypto from "crypto";
import { env } from "@/env";

export function checkAPIKey(apiKey: string) {
  const hashedApiKey = crypto
    .createHash("sha256")
    .update(apiKey)
    .digest("hex");

  if (hashedApiKey !== env.HASHED_API_KEY) {
    throw new Error("Invalid API key");
  }
}