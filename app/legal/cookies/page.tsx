import { BackLink } from "@/components/back-link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata(
  {
    title: "Cookie Policy - Ketryon",
    description:
      "Ketryon's Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies. Learn how we improve your browsing experience.",
    path: "/legal/cookies",
    ogType: "website",
    image: {
      url: siteConfig.defaultImage.url,
      width: siteConfig.defaultImage.width,
      height: siteConfig.defaultImage.height,
      alt: "Cookie Policy - Ketryon",
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
        Cookie Policy
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

export default function CookiePolicy() {
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
              Ketryon (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses
              cookies and similar technologies to enhance your browsing
              experience, analyze site traffic, and understand where our
              visitors are coming from. This Cookie Policy explains how we use
              these technologies and your choices regarding them.
            </p>
          </section>

          <section aria-labelledby="what-are-cookies-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="what-are-cookies-heading"
            >
              2. What Are Cookies?
            </h2>
            <p className="text-gray-600">
              Cookies are small text files that are stored on your device when
              you visit a website. They help websites remember information about
              your visit, such as your preferred language and other settings,
              which can make your next visit easier and more useful.
            </p>
          </section>

          <section aria-labelledby="types-of-cookies-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="types-of-cookies-heading"
            >
              3. Types of Cookies We Use
            </h2>
            <div>
              <div>
                <h3
                  className="text-xl font-medium text-gray-900"
                  id="essential-cookies-heading"
                >
                  3.1 Essential Cookies
                </h3>
                <p className="text-gray-600">
                  These cookies are necessary for the website to function
                  properly. They enable basic functions like page navigation and
                  access to secure areas of the website. The website cannot
                  function properly without these cookies.
                </p>
                <ul
                  aria-labelledby="essential-cookies-heading"
                  className="list-disc text-gray-600"
                >
                  <li>Authentication cookies for user login</li>
                  <li>Session management cookies</li>
                  <li>Security cookies to prevent fraud</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-medium text-gray-900"
                  id="analytics-cookies-heading"
                >
                  3.2 Analytics Cookies
                </h3>
                <p className="text-gray-600">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously.
                </p>
                <ul
                  aria-labelledby="analytics-cookies-heading"
                  className="list-disc text-gray-600"
                >
                  <li>Google Analytics cookies for website analytics</li>
                  <li>Performance monitoring cookies</li>
                  <li>User behavior tracking cookies</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl font-medium text-gray-900"
                  id="preference-cookies-heading"
                >
                  3.3 Preference Cookies
                </h3>
                <p className="text-gray-600">
                  These cookies allow the website to remember choices you make
                  and provide enhanced, more personal features.
                </p>
                <ul
                  aria-labelledby="preference-cookies-heading"
                  className="list-disc text-gray-600"
                >
                  <li>Language preference cookies</li>
                  <li>Theme preference cookies</li>
                  <li>Display preference cookies</li>
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="third-party-cookies-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="third-party-cookies-heading"
            >
              4. Third-Party Cookies
            </h2>
            <p className="text-gray-600">
              We use third-party services that may set their own cookies:
            </p>
            <ul
              aria-labelledby="third-party-cookies-heading"
              className="list-disc text-gray-600"
            >
              <li>
                <strong>Google Analytics:</strong> For website analytics and
                performance monitoring
              </li>
              <li>
                <strong>Cal.com:</strong> For appointment scheduling and
                calendar integration
              </li>
              <li>
                <strong>Vercel:</strong> For hosting and performance
                optimization
              </li>
            </ul>
          </section>

          <section aria-labelledby="cookie-duration-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="cookie-duration-heading"
            >
              5. Cookie Duration
            </h2>
            <div>
              <h3
                className="text-xl font-medium text-gray-900"
                id="session-cookies-heading"
              >
                5.1 Session Cookies
              </h3>
              <p className="text-gray-600">
                These cookies are temporary and are deleted when you close your
                browser. They are used to maintain your session while you browse
                our website.
              </p>

              <h3
                className="text-xl font-medium text-gray-900"
                id="persistent-cookies-heading"
              >
                5.2 Persistent Cookies
              </h3>
              <p className="text-gray-600">
                These cookies remain on your device for a set period or until
                you delete them. They are used to remember your preferences and
                settings for future visits.
              </p>
            </div>
          </section>

          <section aria-labelledby="managing-cookies-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="managing-cookies-heading"
            >
              6. Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-600">
              You can control and manage cookies in several ways:
            </p>
            <ul
              aria-labelledby="managing-cookies-heading"
              className="list-disc text-gray-600"
            >
              <li>
                <strong>Browser Settings:</strong> Most browsers allow you to
                refuse cookies or delete them. Check your browser&apos;s help
                section for instructions.
              </li>
              <li>
                <strong>Cookie Consent:</strong> When you first visit our
                website, you can choose which types of cookies to accept.
              </li>
              <li>
                <strong>Third-Party Opt-Out:</strong> You can opt out of
                third-party cookies through their respective privacy policies.
              </li>
            </ul>
          </section>

          <section aria-labelledby="cookie-updates-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="cookie-updates-heading"
            >
              7. Updates to This Cookie Policy
            </h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the new Cookie Policy on this page and updating the
              &quot;Last updated&quot; date.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="contact-heading"
            >
              8. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies, please contact
              us at{" "}
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
