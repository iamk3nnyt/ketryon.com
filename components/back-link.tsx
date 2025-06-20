import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/legal"
      className="group mb-16 inline-flex w-fit items-center gap-x-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      Back to Legal
    </Link>
  );
}
