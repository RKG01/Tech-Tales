// app/api/create-article/route.ts
import { auth } from "@clerk/nextjs/server"; // ✅ not @clerk/nextjs
import { db } from "@/lib/db";
import { articles } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth(); // ✅ Works now

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content } = await req.json();

  try {
    await db.insert(articles).values({
      title,
      content,
      authorId: userId, // ✅ must match schema
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
  }
}
