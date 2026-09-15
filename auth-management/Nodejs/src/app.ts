import Fastify from "fastify";
import { db } from "./database/client.js";
import { userRoutes } from "./modules/users/user.routes.js";
export function buildApp() {
  const app = Fastify({
    logger: true
  });

  app.get("/health", async () => {
    await db.execute("SELECT 1");
    return {
      status: "health-check is successful",
      statusCode: 200,
      database: "connected"
    };
  });

  app.register(userRoutes);

  return app;
}
