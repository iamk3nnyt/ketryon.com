import { getArticleBySlug } from "@/lib/data/blog";
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const article = slug ? await getArticleBySlug(slug) : null;
  const title = article?.title || "Ketryon";
  const author = article?.author?.name || "Ketryon Team";
  const tag = article?.tag;

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
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p style={{ fontSize: "32px", color: "#374151" }}>{author}</p>
          {tag && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#eff6ff",
                color: "#1d4ed8",
                padding: "12px 24px",
                borderRadius: "9999px",
                fontSize: "28px",
              }}
            >
              {tag}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
