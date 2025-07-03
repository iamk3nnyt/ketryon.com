import { getArticleBySlug } from "@/lib/data/blog";
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const article = slug ? await getArticleBySlug(slug) : null;
  const title = article?.title || "Ketryon";
  const excerpt =
    article?.excerpt || "Transparent software for a better world.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          color: "#111827",
          fontFamily: '"Inter", sans-serif',
          padding: "80px",
          border: "20px solid #f3f4f6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              backgroundColor: "#0a0a0a",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              K
            </p>
          </div>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#4b5563",
            }}
          >
            ketryon.com
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: 800,
              textAlign: "left",
              lineHeight: 1.1,
              color: "#111827",
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: "32px", textAlign: "left", color: "#374151" }}>
            {excerpt}
          </p>
        </div>
        <div style={{ height: "48px" }} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
