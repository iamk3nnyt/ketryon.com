import { BASE_URL, LEGAL_PAGE_LINK_CARDS } from "@/constants";
import Link from "next/link";
import Script from "next/script";

function Header() {
  return (
    <header className="flex flex-col gap-y-4">
      <h1 className="text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Legal
        <br />
        <span className="text-blue-600">Documents</span>
      </h1>
      <p className="mx-auto max-w-xl text-center text-gray-600 sm:text-lg">
        Important information about your rights, our policies, and how we handle
        your data.
      </p>
    </header>
  );
}

function Cards() {
  return (
    <section
      aria-label="Legal documents"
      className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2"
    >
      {LEGAL_PAGE_LINK_CARDS.map((card) => (
        <Link
          className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          href={card.href}
          key={card.title}
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
            style={{
              backgroundColor: card.color,
            }}
          >
            {card.emoji}
          </div>
          <h2 className="font-semibold sm:text-lg">{card.title}</h2>
          <p className="text-sm text-gray-600">{card.description}</p>
        </Link>
      ))}
    </section>
  );
}

export default function LegalPage() {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Legal Documents | webarc.day",
            description:
              "Access webarc.day's legal documents including Terms of Service, Privacy Policy, Cookie Policy, and Refund Policy.",
            publisher: {
              "@type": "Organization",
              name: "webarc.day",
              url: BASE_URL,
            },
          }),
        }}
        id="legal-schema"
        type="application/ld+json"
      />

      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-y-4 px-4 py-16">
        <Header />
        <Cards />
      </main>
    </>
  );
}
