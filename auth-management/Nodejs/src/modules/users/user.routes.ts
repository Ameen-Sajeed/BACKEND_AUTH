import { FastifyInstance } from "fastify";
import { createUserModule } from "./user.module.js";

export async function userRoutes(app: FastifyInstance) {
  const { userController } = createUserModule();

  app.get("/users/test", (request) => {
    return userController.findByEmail(request);
  });
}