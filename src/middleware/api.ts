import { createMiddleware } from "@tanstack/react-start";
import crypto from "crypto";

export const apiMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const apiKey = request.headers.get("x-api-key");

    if (!apiKey) {
      return Response.json(
        { error: "expected x-api-key in header or apiKey in query" },
        { status: 401 }
      );
    }

    const hashedApiKey = crypto
      .createHash("sha256")
      .update(apiKey)
      .digest("hex");

    if (hashedApiKey !== process.env.HASHED_API_KEY) {
      return Response.json({ error: "invalid api key" }, { status: 401 });
    }

    return next();
  }
);
