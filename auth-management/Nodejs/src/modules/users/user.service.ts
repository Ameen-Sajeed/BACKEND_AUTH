import { UserRepository } from "./user.repository.js";

export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async findById(id: string) {
    return this.userRepository.findById(id);
  }
}   