import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  authorId: text("author_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  likes: integer("likes").default(0).notNull(),
  dislikes: integer("dislikes").default(0).notNull(),
});
