import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex h-screen w-full max-w-3xl flex-col items-center justify-center gap-y-4 px-4 py-16 text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Page Not Found
      </h1>
      <p className="text-gray-600">
        The page you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/"
        className="group mt-4 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>
    </main>
  );
}
