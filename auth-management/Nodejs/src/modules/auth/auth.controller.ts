import { FastifyRequest } from "fastify";
import { AuthService } from "./auth.service.js";

export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  async register(
    request: FastifyRequest<{
      Body: {
        email: string;
        password: string;
      };
    }>
  ) {
    const { email, password } = request.body;

    return this.authService.register(
      email,
      password
    );
  }
}