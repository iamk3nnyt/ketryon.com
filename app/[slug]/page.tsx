import { AppImage } from "@/components/app-image";
import { BASE_URL } from "@/constants";
import { getArticleBySlug, getRelatedArticles } from "@/lib/data/blog";
import { buildMetadata, extractKeywords } from "@/lib/metadata";
import { ArrowLeft, Clock } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  const wordCount = article.content.split(/\s+/).length;
  const readingTimeISO = `PT${article.readTime.split(" ")[0]}M`;

  return buildMetadata({
    type: "article",
    title: `${article.title} - Ketryon's Blog`,
    description: article.excerpt,
    path: `/${article.slug}`,
    publishedTime: article.date,
    modifiedTime: article.date,
    author: article.author.name,
    wordCount,
    readingTime: readingTimeISO,
    keywords: extractKeywords(article.content),
    image: article.image
      ? {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      : undefined,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = await getArticleBySlug(slug);
  if (!article) return notFound();

  const relatedArticles = await getRelatedArticles(slug);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-y-8 px-4 py-16">
      {/* Back Button */}
      <Link
        href="/"
        className="group inline-flex w-fit items-center gap-x-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      {/* Header */}
      <header className="flex flex-col gap-y-4">
        {article.tag && (
          <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {article.tag}
          </span>
        )}
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
        <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:gap-x-4">
          {/* Author */}
          <div className="flex items-center gap-x-2">
            <div className="relative size-6 shrink-0">
              <AppImage
                src={article.author.image}
                alt={article.author.name}
                className="h-full w-full rounded-full"
              />
            </div>
            <span className="font-medium text-gray-900">
              {article.author.name}
            </span>
          </div>
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-3 text-sm text-gray-600">
            <time dateTime={article.date} className="whitespace-nowrap">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <div className="flex items-center gap-x-1">
              <Clock className="h-4 w-4 shrink-0" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {article.image && (
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <AppImage
            src={article.image}
            alt={article.title}
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <article className="prose prose-gray -mt-12 max-w-none">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      {/* Author Bio */}
      <div className="flex items-start gap-4 rounded-lg border border-gray-100 bg-gray-50/50 p-6">
        <div className="relative size-12 shrink-0">
          <AppImage
            src={article.author.image}
            alt={article.author.name}
            className="h-full w-full rounded-full"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{article.author.name}</h3>
          <p className="mt-1 text-sm text-gray-600">
            {article.author.bio ||
              "Writer and developer passionate about building transparent software."}
          </p>
        </div>
      </div>

      {/* Related Articles */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {relatedArticles.map((article) => (
            <Link
              key={article.id}
              href={`/${article.slug}`}
              className="group flex flex-col gap-2 rounded-lg border border-gray-100 p-4 transition-colors hover:border-gray-200"
            >
              <span className="text-sm font-medium text-blue-700">
                {article.tag}
              </span>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Social Share */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">
          Share this article:
        </span>
        <div className="flex gap-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`${BASE_URL}/${article.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${BASE_URL}/${article.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
