import { z } from "zod";

// Environment variables schema
const envSchema = z.object({
  // Assets URL (available on client and server)
  VITE_ASSETS_URL: z.url("VITE_ASSETS_URL must be a valid URL").optional(),

  // API Configuration (server-only)
  HASHED_API_KEY: z.string().min(1, "HASHED_API_KEY is required"),

  // SMTP Configuration (server-only)
  SMTP_USERNAME: z.string().min(1, "SMTP_USERNAME is required"),
  SMTP_PASSWORD: z.string().min(1, "SMTP_PASSWORD is required"),
  SMTP_HOST: z.string().min(1, "SMTP_HOST is required"),
  SMTP_SECURE: z.stringbool().prefault("false"),
  SMTP_PORT: z.coerce.number().int().positive().prefault("587"),

  // Email Configuration (server-only)
  EMAIL_FROM_ADDRESS: z.email("EMAIL_FROM_ADDRESS must be a valid email address"),
  EMAIL_FROM_NAME: z.string().min(1, "EMAIL_FROM_NAME is required"),
});

// Parse and validate environment variables
const parseEnv = (): z.infer<typeof envSchema> => {
  const isServer = typeof process !== "undefined" && process.env;
  
  // Combine import.meta.env (VITE_ vars) and process.env (server vars)
  const combinedEnv = {
    ...import.meta.env,
    // Server-only vars from process.env (only available server-side)
    ...(isServer
      ? {
          HASHED_API_KEY: process.env.HASHED_API_KEY,
          SMTP_USERNAME: process.env.SMTP_USERNAME,
          SMTP_PASSWORD: process.env.SMTP_PASSWORD,
          SMTP_HOST: process.env.SMTP_HOST,
          SMTP_SECURE: process.env.SMTP_SECURE,
          SMTP_PORT: process.env.SMTP_PORT,
          EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
          EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
        }
      : {}),
  };

  // Use partial schema for client-side (server vars optional)
  const schemaToUse = isServer
    ? envSchema
    : envSchema.partial({
        HASHED_API_KEY: true,
        SMTP_USERNAME: true,
        SMTP_PASSWORD: true,
        SMTP_HOST: true,
        SMTP_SECURE: true,
        SMTP_PORT: true,
        EMAIL_FROM_ADDRESS: true,
        EMAIL_FROM_NAME: true,
      });

  const result = schemaToUse.safeParse(combinedEnv);
  if (!result.success) {
    throw new Error(
      `Environment validation failed:\n${result.error.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join("\n")}\n\n` +
        "Please check your .env file and ensure all required variables are set.",
    );
  }

  // Type assertion: on server, all fields are present; on client, partial is fine
  return result.data as z.infer<typeof envSchema>;
};

// Export validated environment variables
export const env = parseEnv();

// Export the schema for testing purposes
export { envSchema };

// Export type for TypeScript usage
export type EnvConfig = z.infer<typeof envSchema>;
