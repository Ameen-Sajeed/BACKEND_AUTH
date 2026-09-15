import {
    pgTable,
    uuid,
    varchar,
    text,
    timestamp
  } from "drizzle-orm/pg-core";
  
  export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(),
  
    email: varchar("email", { length: 255 }).notNull().unique(),
  
    passwordHash: text("password_hash").notNull(),
  
    status: varchar("status", { length: 20 })
      .notNull()
      .default("ACTIVE"),
  
    createdAt: timestamp("created_at", {
      withTimezone: true
    })
      .notNull()
      .defaultNow(),
  
    updatedAt: timestamp("updated_at", {
      withTimezone: true
    })
      .notNull()
      .defaultNow()
  });