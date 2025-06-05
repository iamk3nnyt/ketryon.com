"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
const GlobeGL = dynamic(() => import("./components/GlobeGL"), { ssr: false });

function Header() {
  return (
    <header className="flex flex-col gap-y-4">
      <h1 className="text-center text-3xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
        Building Software with
        <br />
        <span className="text-blue-600">Transparency & Efficiency</span>
      </h1>
      <p className="mx-auto max-w-xl text-center text-gray-600 sm:text-lg">
        We deliver exceptional software solutions through clear processes and
        streamlined workflows, ensuring your success every step of the way.
      </p>
    </header>
  );
}

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-y-12 px-4 py-16">
      <Header />
      <GlobeGL />
      <div className="relative mx-auto flex w-full max-w-xl flex-col justify-between gap-y-4 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/60 to-white p-8 shadow-sm backdrop-blur-sm">
        <div className="flex flex-col gap-y-2">
          <h3 className="font-semibold tracking-tight text-gray-900 sm:text-lg">
            Ready to Transform Your Business?
          </h3>
          <p className="text-sm text-gray-600">
            Let's discuss how we can help you achieve your goals with
            transparent, efficient solutions.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
        >
          Schedule a Free Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
