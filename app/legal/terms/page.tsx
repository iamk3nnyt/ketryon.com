import { BackLink } from "@/components/back-link";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  type: "legal",
  title: "Terms of Service | Ketryon",
  description:
    "Learn about the terms and conditions for using Ketryon's services. Understand your rights and obligations when working with our development team.",
  path: "/legal/terms",
  documentType: "terms",
});

function Header() {
  return (
    <header className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Terms of Service
      </h1>
      <p className="text-gray-600 sm:text-lg">
        Last updated:{" "}
        <time dateTime={new Date().toISOString()}>
          {new Date().toLocaleDateString()}
        </time>
      </p>
    </header>
  );
}

export default function TermsOfService() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <BackLink />

      <Header />

      <article className="prose prose-lg">
        <div>
          <section aria-labelledby="introduction-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="introduction-heading"
            >
              1. Introduction
            </h2>
            <p className="text-gray-600">
              Welcome to Ketryon. These Terms of Service (&quot;Terms&quot;)
              govern your use of our website and services. By accessing or using
              our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section aria-labelledby="services-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="services-heading"
            >
              2. Services
            </h2>
            <p className="text-gray-600">
              Ketryon provides web development, design, and consulting services.
              We specialize in building transparent, open-source software
              solutions for businesses and organizations.
            </p>
          </section>

          <section aria-labelledby="acceptance-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="acceptance-heading"
            >
              3. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By using our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms. If you do not
              agree to these Terms, please do not use our services.
            </p>
          </section>

          <section aria-labelledby="use-of-services-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="use-of-services-heading"
            >
              4. Use of Services
            </h2>
            <p className="text-gray-600">
              You agree to use our services only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul
              aria-labelledby="use-of-services-heading"
              className="list-disc text-gray-600"
            >
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>
                Attempt to gain unauthorized access to our systems or networks
              </li>
              <li>Interfere with or disrupt our services</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section aria-labelledby="intellectual-property-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="intellectual-property-heading"
            >
              5. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content, code, and materials provided through our services
              remain the property of Ketryon or our licensors. We believe in
              transparency and open source, so much of our work is available
              under open source licenses.
            </p>
          </section>

          <section aria-labelledby="privacy-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="privacy-heading"
            >
              6. Privacy
            </h2>
            <p className="text-gray-600">
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of our services, to understand our
              practices.
            </p>
          </section>

          <section aria-labelledby="limitation-of-liability-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="limitation-of-liability-heading"
            >
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Ketryon shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of our services.
            </p>
          </section>

          <section aria-labelledby="termination-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="termination-heading"
            >
              8. Termination
            </h2>
            <p className="text-gray-600">
              We may terminate or suspend your access to our services
              immediately, without prior notice, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
          </section>

          <section aria-labelledby="changes-to-terms-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="changes-to-terms-heading"
            >
              9. Changes to Terms
            </h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the new Terms on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="contact-heading"
            >
              10. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:kenny@ketryon.com"
                className="text-blue-600 hover:text-blue-800"
              >
                kenny@ketryon.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
