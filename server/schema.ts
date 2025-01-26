import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
});
