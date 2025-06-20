import { BASE_URL } from "@/constants";
import type { Metadata } from "next";

interface BaseMetadata {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

interface WebsiteMetadata extends BaseMetadata {
  type: "website";
  organization?: {
    name: string;
    url: string;
    logo: string;
    email: string;
  };
}

interface LegalMetadata extends BaseMetadata {
  type: "legal";
  documentType: "privacy" | "terms" | "cookies" | "refund";
}

interface BlogArticleMetadata extends BaseMetadata {
  type: "article";
  publishedTime: string;
  modifiedTime: string;
  author: string;
  wordCount: number;
  readingTime: string;
  keywords: string[];
}

interface BlogIndexMetadata extends BaseMetadata {
  type: "blog";
  posts: Array<{
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    image?: string;
  }>;
}

type PageMetadata =
  | WebsiteMetadata
  | LegalMetadata
  | BlogArticleMetadata
  | BlogIndexMetadata;

function generateSchemaOrg(metadata: PageMetadata) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": metadata.type === "article" ? "BlogPosting" : "WebPage",
    name: metadata.title,
    description: metadata.description,
    url: `${BASE_URL}${metadata.path}`,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    isFamilyFriendly: true,
  };

  switch (metadata.type) {
    case "website":
      return {
        ...baseSchema,
        "@type": "WebSite",
        ...(metadata.organization && {
          publisher: {
            "@type": "Organization",
            name: metadata.organization.name,
            url: metadata.organization.url,
            logo: {
              "@type": "ImageObject",
              url: metadata.organization.logo,
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: metadata.organization.email,
              availableLanguage: ["English"],
            },
          },
        }),
      };
    case "legal":
      return {
        ...baseSchema,
        "@type": "WebPage",
        about: {
          "@type": "Thing",
          name:
            metadata.documentType === "privacy"
              ? "Privacy Policy"
              : metadata.documentType === "terms"
                ? "Terms of Service"
                : metadata.documentType === "cookies"
                  ? "Cookie Policy"
                  : "Refund Policy",
        },
      };
    case "article":
      return {
        ...baseSchema,
        "@type": "BlogPosting",
        headline: metadata.title,
        articleBody: metadata.description,
        wordCount: metadata.wordCount,
        datePublished: metadata.publishedTime,
        dateModified: metadata.modifiedTime,
        keywords: metadata.keywords,
        timeRequired: metadata.readingTime,
        articleSection: "Design & Development",
        image: metadata.image
          ? {
              "@type": "ImageObject",
              url: metadata.image.url,
              width: metadata.image.width,
              height: metadata.image.height,
            }
          : undefined,
      };
    case "blog":
      return {
        ...baseSchema,
        "@type": "Blog",
        blogPosts: metadata.posts.map((post, index) => ({
          "@type": "BlogPosting",
          "@id": `${BASE_URL}/blog/${post.slug}`,
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          image: post.image
            ? {
                "@type": "ImageObject",
                url: post.image,
                width: 1200,
                height: 630,
              }
            : undefined,
          position: index + 1,
        })),
      };
    default:
      return baseSchema;
  }
}

export function buildMetadata(metadata: PageMetadata): Metadata {
  const defaultImage = {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: metadata.title,
  };

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.path,
      type: metadata.type === "article" ? "article" : "website",
      ...(metadata.type === "article" && {
        publishedTime: (metadata as BlogArticleMetadata).publishedTime,
        modifiedTime: (metadata as BlogArticleMetadata).modifiedTime,
        authors: ["Kenny Tran"],
      }),
      images: [metadata.image || defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image?.url || defaultImage.url],
      creator: "@itsk3nny_",
    },
    alternates: {
      canonical: metadata.path,
    },
    other: {
      "application/ld+json": JSON.stringify(generateSchemaOrg(metadata)),
    },
  };
}

export function extractKeywords(content: string): string[] {
  const commonTerms = ["design", "development", "web", "tutorial", "essay"];
  const words = content.toLowerCase().split(/\W+/);
  const wordFreq = new Map<string, number>();

  words.forEach((word) => {
    if (word.length > 3) {
      wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
    }
  });

  const topWords = Array.from(wordFreq.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word);

  return [...new Set([...commonTerms, ...topWords])];
}
