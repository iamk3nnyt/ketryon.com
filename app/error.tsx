"use client";

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center py-16 text-center text-red-500">
      <span className="text-base">An unexpected error occurred</span>
    </main>
  );
}
