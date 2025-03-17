import { db } from "@/lib/db";
import { posts } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const allPosts = await db.select().from(posts);
  return NextResponse.json(allPosts);
}

export async function POST(req: Request) {
  const { content, authorId } = await req.json();
  await db.insert(posts).values({ content, authorId });
  return NextResponse.json({ success: true });
}
