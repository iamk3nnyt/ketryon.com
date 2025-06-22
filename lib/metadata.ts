import type { Metadata } from "next";
import {
  Blog,
  BlogPosting,
  Organization,
  Person,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

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
  robots?: Metadata["robots"];
  ogType?: "website" | "article" | "profile";
  schema?: Schema;
}

interface SchemaPerson {
  type: "Person";
  jobTitle: string;
  worksFor?: {
    name: string;
    url: string;
    description: string;
    sameAs: string[];
  };
}

interface SchemaArticle {
  type: "Article";
  publishedTime: string;
  modifiedTime: string;
  author: string;
  wordCount: number;
  readingTime: string;
}

interface SchemaBlog {
  type: "Blog";
  posts: Array<{
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    image?: string;
  }>;
}

interface SchemaWebPage {
  type: "WebPage";
  about?: {
    name: string;
    url: string;
    type: "Person" | "Organization";
  };
}

interface SchemaOrganization {
  type: "Organization";
  name: string;
  url: string;
  logo: string;
  email: string;
}

interface SchemaWebSite {
  type: "WebSite";
}

type Schema =
  | SchemaPerson
  | SchemaArticle
  | SchemaBlog
  | SchemaWebPage
  | SchemaWebSite
  | SchemaOrganization;

export interface MetadataConfig {
  siteUrl: string;
  siteName: string;
  defaultImage: {
    url: string;
    width: number;
    height: number;
  };
  locale?: string;
  inLanguage?: string;
  article?: {
    section: string;
  };
  twitter: {
    card: "summary" | "summary_large_image";
    creator?: string;
  };
}

function generateSchemaOrg(
  base: BaseMetadata,
  config: MetadataConfig,
): WithContext<BlogPosting | Blog | Person | WebPage | WebSite | Organization> {
  const { schema } = base;

  const baseCreativeWorkSchema = {
    name: base.title,
    description: base.description,
    url: `${config.siteUrl}${base.path}`,
    inLanguage: config.inLanguage,
    isAccessibleForFree: true,
    isFamilyFriendly: true,
  };

  switch (schema?.type) {
    case "Article":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        ...baseCreativeWorkSchema,
        headline: base.title,
        articleBody: base.description,
        wordCount: schema.wordCount,
        datePublished: schema.publishedTime,
        dateModified: schema.modifiedTime,
        timeRequired: schema.readingTime,
        articleSection: config.article?.section,
        image: base.image
          ? {
              "@type": "ImageObject",
              url: base.image.url,
              width: {
                "@type": "QuantitativeValue",
                value: base.image.width,
                unitCode: "E37",
              },
              height: {
                "@type": "QuantitativeValue",
                value: base.image.height,
                unitCode: "E37",
              },
            }
          : undefined,
      };
    case "Blog":
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        ...baseCreativeWorkSchema,
        blogPost: schema.posts.map((post, index) => ({
          "@type": "BlogPosting",
          "@id": `${config.siteUrl}/blog/${post.slug}`,
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          image: post.image
            ? {
                "@type": "ImageObject",
                url: post.image,
                width: {
                  "@type": "QuantitativeValue",
                  value: 1200,
                  unitCode: "E37",
                },
                height: {
                  "@type": "QuantitativeValue",
                  value: 630,
                  unitCode: "E37",
                },
              }
            : undefined,
          position: index + 1,
        })),
      };
    case "Person":
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        ...baseCreativeWorkSchema,
        jobTitle: schema.jobTitle,
        worksFor: schema.worksFor
          ? {
              "@type": "Organization",
              name: schema.worksFor.name,
              url: schema.worksFor.url,
              description: schema.worksFor.description,
              sameAs: schema.worksFor.sameAs,
            }
          : undefined,
      };
    case "Organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: schema.name,
        url: schema.url,
        logo: schema.logo,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: schema.email,
          availableLanguage: [config.inLanguage || "English"],
        },
      };
    case "WebPage":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        ...baseCreativeWorkSchema,
        ...(schema.about && {
          about: {
            "@type": schema.about.type,
            name: schema.about.name,
            url: schema.about.url,
          },
        }),
      };
    case "WebSite":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        ...baseCreativeWorkSchema,
      };
    default:
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        ...baseCreativeWorkSchema,
      };
  }
}

export function buildMetadata(
  base: BaseMetadata,
  config: MetadataConfig,
): Metadata {
  const defaultImage = {
    ...config.defaultImage,
    alt: base.title,
  };

  const imageToUse = base.image ?? defaultImage;
  const jsonLd = base.schema ? generateSchemaOrg(base, config) : undefined;

  const result: Metadata = {
    metadataBase: new URL(config.siteUrl),
    title: base.title,
    description: base.description,
    openGraph: {
      title: base.title,
      description: base.description,
      url: base.path,
      siteName: config.siteName,
      images: [
        {
          url: imageToUse.url,
          width: imageToUse.width,
          height: imageToUse.height,
          alt: imageToUse.alt,
        },
      ],
      locale: config.locale ?? "en_US",
      type:
        base.ogType ??
        (base.schema?.type === "Article" ? "article" : "website"),
    },
    twitter: {
      card: config.twitter.card,
      title: base.title,
      description: base.description,
      images: [imageToUse.url],
      ...(config.twitter.creator && { creator: config.twitter.creator }),
    },
    alternates: {
      canonical: base.path,
    },
    ...(base.robots && { robots: base.robots }),
    ...(jsonLd && {
      other: {
        "application/ld+json": JSON.stringify(jsonLd, null, 2),
      },
    }),
  };

  if (base.schema?.type === "Article") {
    result.openGraph = {
      ...result.openGraph,
      type: "article",
      publishedTime: base.schema.publishedTime,
      modifiedTime: base.schema.modifiedTime,
      authors: [base.schema.author],
    };
  }

  return result;
}
