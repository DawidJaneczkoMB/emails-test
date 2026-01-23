import { checkAPIKey } from "@/utils/checkAPIKey";
import { createMiddleware } from "@tanstack/react-start";

export const apiMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const apiKey = request.headers.get("x-api-key");

    if (!apiKey) {
      return Response.json(
        { error: "expected x-api-key in header or apiKey in query" },
        { status: 401 }
      );
    }

    try {
      checkAPIKey(apiKey);
    } catch {
      return Response.json({ error: "invalid api key" }, { status: 401 });
    }

    return next();
  }
);
