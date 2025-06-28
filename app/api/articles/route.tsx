// app/api/articles/route.ts
import { db } from "@/lib/db";
import { articles } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allArticles = await db.select().from(articles).orderBy(articles.createdAt);

    return NextResponse.json(allArticles);
  } catch (err) {
    console.error("Error fetching articles:", err);
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}
