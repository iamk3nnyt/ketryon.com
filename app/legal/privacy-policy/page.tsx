import { BackLink } from "@/components/back-link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata(
  {
    title: "Privacy Policy - Ketryon",
    description:
      "Our Privacy Policy outlines how Ketryon collects, uses, and protects your personal information when you use our services. Your privacy is important to us.",
    path: "/legal/privacy-policy",
    ogType: "website",
    image: {
      url: siteConfig.defaultImage.url,
      width: siteConfig.defaultImage.width,
      height: siteConfig.defaultImage.height,
      alt: "Privacy Policy - Ketryon",
    },
    schema: {
      type: "WebPage",
    },
  },
  siteConfig,
);

function Header() {
  return (
    <header className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Privacy Policy
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

export default function PrivacyPolicy() {
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
              Ketryon (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our services.
            </p>
          </section>

          <section aria-labelledby="information-collection-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="information-collection-heading"
            >
              2. Information We Collect
            </h2>
            <div>
              <div>
                <h3
                  className="text-xl font-medium text-gray-900"
                  id="personal-info-heading"
                >
                  2.1 Personal Information
                </h3>
                <p className="text-gray-600">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul
                  aria-labelledby="personal-info-heading"
                  className="list-disc text-gray-600"
                >
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Company information</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-medium text-gray-900"
                  id="usage-info-heading"
                >
                  2.2 Usage Information
                </h3>
                <p className="text-gray-600">
                  We automatically collect certain information about your device
                  and usage, including:
                </p>
                <ul
                  aria-labelledby="usage-info-heading"
                  className="list-disc text-gray-600"
                >
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited</li>
                  <li>Time and date of visits</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="information-use-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="information-use-heading"
            >
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul
              aria-labelledby="information-use-heading"
              className="list-disc text-gray-600"
            >
              <li>Provide and maintain our services</li>
              <li>Communicate with you about projects and services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our services and website</li>
              <li>Prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section aria-labelledby="data-security-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="data-security-heading"
            >
              4. Data Security
            </h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section aria-labelledby="third-party-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="third-party-heading"
            >
              5. Third-Party Services
            </h2>
            <p className="text-gray-600">
              We may use third-party services that collect, monitor, and analyze
              data, including:
            </p>
            <ul
              aria-labelledby="third-party-heading"
              className="list-disc text-gray-600"
            >
              <li>Google Analytics for website analytics</li>
              <li>Cal.com for appointment scheduling</li>
              <li>Email service providers for communication</li>
              <li>Cloud hosting providers for data storage</li>
            </ul>
          </section>

          <section aria-labelledby="your-rights-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="your-rights-heading"
            >
              6. Your Rights
            </h2>
            <p className="text-gray-600">You have the right to:</p>
            <ul
              aria-labelledby="your-rights-heading"
              className="list-disc text-gray-600"
            >
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section aria-labelledby="cookies-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="cookies-heading"
            >
              7. Cookies
            </h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to track activity
              on our website and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>
          </section>

          <section aria-labelledby="data-retention-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="data-retention-heading"
            >
              8. Data Retention
            </h2>
            <p className="text-gray-600">
              We will retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this Privacy Policy
              and to comply with our legal obligations.
            </p>
          </section>

          <section aria-labelledby="changes-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="changes-heading"
            >
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date.
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
              If you have any questions about this Privacy Policy, please
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
