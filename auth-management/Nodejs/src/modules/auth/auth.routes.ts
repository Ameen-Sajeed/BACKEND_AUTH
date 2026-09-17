import { FastifyInstance } from "fastify";
import { createAuthModule } from "./auth.module.js";

export async function authRoutes(
  app: FastifyInstance
) {
  const { authController } = createAuthModule();

  app.post<{
    Body: {
      email: string;
      password: string;
    };
  }>("/auth/register", (request) => {
    return authController.register(request);
  });
}