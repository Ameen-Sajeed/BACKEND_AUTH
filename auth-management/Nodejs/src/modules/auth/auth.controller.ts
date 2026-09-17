import { FastifyRequest } from "fastify";
import { AuthService } from "./auth.service.js";
import { registerSchema } from "./auth.schema.js";

export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  async register(
    request: FastifyRequest
  ) {
    const data = registerSchema.parse(request.body);

    return this.authService.register(
      data.email,
      data.password
    );
  }
}