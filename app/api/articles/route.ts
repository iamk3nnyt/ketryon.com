import client from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

const LIMIT = 6;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const cursor = searchParams.get("cursor");
    const tag = searchParams.get("tag");

    const db = client.db("ketryon");
    const collection = db.collection("blog_posts");

    // Build query
    const query: any = {};
    if (tag) {
      query.tag = tag;
    }
    if (cursor) {
      query._id = { $lt: cursor };
    }

    // Fetch articles
    const articles = await collection
      .find(query)
      .sort({ date: -1 })
      .limit(LIMIT)
      .toArray();

    // Get total count for pagination
    const total = await collection.countDocuments(query);

    // Get next cursor
    const lastArticle = articles[articles.length - 1];
    const nextCursor = lastArticle ? lastArticle._id : null;

    return NextResponse.json({
      articles,
      nextCursor,
      hasMore: articles.length === LIMIT,
      total,
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 },
    );
  }
}
