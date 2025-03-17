import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  authorId: text("author_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
