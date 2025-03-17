CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"author_id" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
