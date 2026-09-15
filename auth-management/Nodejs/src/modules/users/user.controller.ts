import { FastifyRequest } from "fastify";
import { UserService } from "./user.service.js";

export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  async findByEmail(
    request: FastifyRequest<{
      Querystring: {
        email: string;
      };
    }>
  ) {
    const { email } = request.query;

    const user = await this.userService.findByEmail(email);

    return {
      user
    };
  }
}