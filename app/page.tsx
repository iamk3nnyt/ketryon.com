"use client";

import { TrustBadge } from "@/components/trust-badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col gap-y-6">
      <h1 className="text-center text-3xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
        Building Software with
        <br />
        <span className="text-blue-600">Transparency & Efficiency</span>
      </h1>
      <p className="mx-auto max-w-xl text-center text-gray-600 sm:text-lg">
        We deliver exceptional <b>software solutions</b> through clear{" "}
        <b>processes</b> and streamlined <b>workflows</b>, ensuring your success
        every step of the way.
      </p>
      <TrustBadge />
      <Link
        href="/contact"
        className="group mx-auto inline-flex w-fit items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-base font-semibold text-white shadow transition hover:from-blue-700 hover:to-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
      >
        <span>Start Your Project</span>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </header>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-y-12 px-4 py-16">
      <Header />
    </main>
  );
}
