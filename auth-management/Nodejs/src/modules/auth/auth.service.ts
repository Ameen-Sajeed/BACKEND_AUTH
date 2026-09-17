import { UserRepository } from "../users/user.repository.js";
import { hashPassword } from "../../utils/password.js";

export class AuthService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async register(email: string, password: string) {
    const existingUser =
      await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    const passwordHash = await hashPassword(password);

    const user = await this.userRepository.createUser({
      email,
      passwordHash
    });

    return {
      id: user.id,
      email: user.email,
      status: user.status,
      createdAt: user.createdAt
    };
  }
}