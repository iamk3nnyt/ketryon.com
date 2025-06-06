"use client";

import { Calendar } from "@/components/calendar";
import { Marquee } from "@/components/marquee";
import { TrustBadge } from "@/components/trust-badge";
import { cn } from "@/lib/utils";
import Arrow from "@/public/arrow.svg";
import { ArrowRight } from "lucide-react";
import { Handlee } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const handlee = Handlee({ weight: ["400"], subsets: ["latin"] });

function Header() {
  return (
    <header className="flex flex-col gap-y-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-5xl">
        Building Software with
        <br />
        <span className="text-blue-600">Transparency & Efficiency</span>
      </h1>
      <p className="max-w-lg text-gray-600 sm:text-lg">
        <span className="font-light">We deliver exceptional</span>{" "}
        <b>software solutions</b>{" "}
        <span className="font-light">through clear</span> <b>processes</b>{" "}
        <span className="font-light">and streamlined</span> <b>workflows</b>,{" "}
        <span className="font-light">
          ensuring your success every step of the way.
        </span>
      </p>
      <TrustBadge />
      <Link
        href="/contact"
        className="group inline-flex w-fit items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-base font-semibold text-white shadow transition hover:from-blue-700 hover:to-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none"
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
      <div className="relative">
        <div className="absolute right-0 bottom-16 z-20">
          <span
            className={cn(
              "-ml-12 block -rotate-12 tracking-tighter",
              handlee.className,
            )}
          >
            Our tech stack
          </span>
          <Image alt="arrow" src={Arrow} className="w-16" />
        </div>
        <Marquee />
      </div>
      <Calendar />
    </main>
  );
}
