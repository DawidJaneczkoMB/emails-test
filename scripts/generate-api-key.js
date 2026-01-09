import crypto from "crypto";

const apiKey = crypto.randomBytes(32).toString("hex");

const hashedApiKey = crypto.createHash("sha256").update(apiKey).digest("hex");

console.log({
  apiKey,
  hashedApiKey,
});
