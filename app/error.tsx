"use client";

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center py-16 text-center text-red-500">
      <span className="text-base">
        {error.message || "An unexpected error occurred"}
      </span>
    </main>
  );
}
