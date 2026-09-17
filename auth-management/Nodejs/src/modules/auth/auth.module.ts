import { UserRepository } from "../users/user.repository.js";
import { AuthService } from "./auth.service.js";
import { AuthController } from "./auth.controller.js";

export function createAuthModule() {
  const userRepository = new UserRepository();

  const authService = new AuthService(
    userRepository
  );

  const authController = new AuthController(
    authService
  );

  return {
    authController
  };
}