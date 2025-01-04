import { boolean, serial, varchar, pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", 255).notNull(),
  email: varchar("email", 255).notNull(),
  imageUrl: varchar("imageUrl", 255),
  subscription: boolean("subscription").default(false),
});
