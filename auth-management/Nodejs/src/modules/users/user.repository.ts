import { eq } from "drizzle-orm";
import { db } from "../../database/client.js";
import { users } from "../../database/schema/users.js";

export class UserRepository {
  async findByEmail(email: string) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    return result[0] ?? null;
  }

  async findById(id: string) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);

    return result[0] ?? null;
  }

  async createUser(data: {
    email: string;
    passwordHash: string;
  }) {
    const result = await db
      .insert(users)
      .values({
        email: data.email,
        passwordHash: data.passwordHash
      })
      .returning();
  
    return result[0];
  }
}