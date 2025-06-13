"use client";

import { cn } from "@/lib/utils";
import type { Article } from "@/types/blog";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Blog() {
  return (
    <section className="flex flex-col gap-y-6">
      <span className="mb-2 w-fit rounded-md bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        Blog
      </span>
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
        Latest Insights
      </h2>
      <ul className="divide-y divide-gray-100">
        {(() => {
          const [posts, setPosts] = useState<Article[]>([]);
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState<string | null>(null);

          useEffect(() => {
            const fetchPosts = async () => {
              try {
                const response = await fetch("/api/articles?limit=3");
                if (!response.ok) throw new Error("Failed to fetch posts");
                const data = await response.json();
                setPosts(data.articles);
              } catch (err) {
                setError(
                  err instanceof Error ? err.message : "Failed to fetch posts",
                );
              } finally {
                setLoading(false);
              }
            };

            fetchPosts();
          }, []);

          if (loading) {
            return (
              <li className="flex flex-col items-center justify-center py-16 text-center text-gray-400">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
              </li>
            );
          }

          if (error) {
            return (
              <li className="flex flex-col items-center justify-center py-16 text-center text-red-500">
                <span className="text-base">{error}</span>
              </li>
            );
          }

          if (posts.length === 0) {
            return (
              <li className="flex flex-col items-center justify-center py-16 text-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mb-2 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                <span className="text-base">
                  No articles yet.
                  <br />
                  Check back soon for updates!
                </span>
              </li>
            );
          }

          return posts.map((post, index) => (
            <li
              key={post.id}
              className={cn(
                index ? "py-7" : "pb-7",
                "group flex flex-col gap-2",
              )}
            >
              {post.tag && (
                <span className="mb-1 w-fit rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                  {post.tag}
                </span>
              )}
              <div className="mb-1 flex items-center gap-2">
                <Link
                  href={`/${post.slug}`}
                  className="text-xl font-bold text-gray-900 transition-colors hover:underline focus:underline"
                >
                  {post.title}
                </Link>
              </div>
              <p className="mb-1 max-w-2xl text-base font-light text-gray-700">
                {post.excerpt}
              </p>
              <div className="font-mono text-xs tracking-tight text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                &middot; {post.author.name}
              </div>
            </li>
          ));
        })()}
      </ul>
    </section>
  );
}
