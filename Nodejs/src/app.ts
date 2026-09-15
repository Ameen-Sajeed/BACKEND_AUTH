import Fastify from "fastify";
import { stat } from "node:fs";

export function buildApp() {
  const app = Fastify({
    logger: true
  });

  app.get("/health", async () => {
    return {
      status: "health-check is successful",
      statusCode: 200
    };
  });

  return app;
}
