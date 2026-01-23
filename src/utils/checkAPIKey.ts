
import crypto from "crypto";

export function checkAPIKey(apiKey: string) {
  const hashedApiKey = crypto
    .createHash("sha256")
    .update(apiKey)
    .digest("hex");

  if (hashedApiKey !== process.env.HASHED_API_KEY) {
    throw new Error("Invalid API key");
  }
}