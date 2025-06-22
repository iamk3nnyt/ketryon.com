import { BackLink } from "@/components/back-link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata(
  {
    title: "Refund Policy - Ketryon",
    description:
      "Our Refund Policy details the terms and conditions for refunds on Ketryon's services. Understand our process for project cancellations and payments.",
    path: "/legal/refund",
    ogType: "website",
    image: {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "Refund Policy - Ketryon",
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
        Refund Policy
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

export default function RefundPolicy() {
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
              At Ketryon, we strive to deliver exceptional value and quality in
              all our services. This Refund Policy outlines the circumstances
              under which refunds may be provided and the process for requesting
              them.
            </p>
          </section>

          <section aria-labelledby="service-commitment-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="service-commitment-heading"
            >
              2. Our Service Commitment
            </h2>
            <p className="text-gray-600">
              We are committed to delivering high-quality development services
              that meet your requirements. If you are not satisfied with our
              work, we will work with you to address any issues and ensure your
              satisfaction.
            </p>
          </section>

          <section aria-labelledby="refund-eligibility-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="refund-eligibility-heading"
            >
              3. Refund Eligibility
            </h2>
            <div>
              <h3
                className="text-xl font-medium text-gray-900"
                id="eligible-scenarios-heading"
              >
                3.1 Eligible Scenarios
              </h3>
              <p className="text-gray-600">
                Refunds may be considered in the following circumstances:
              </p>
              <ul
                aria-labelledby="eligible-scenarios-heading"
                className="list-disc text-gray-600"
              >
                <li>
                  <strong>Service Cancellation:</strong> If you cancel a project
                  before work begins
                </li>
                <li>
                  <strong>Quality Issues:</strong> If the delivered work does
                  not meet agreed-upon specifications
                </li>
                <li>
                  <strong>Timeline Delays:</strong> If we fail to meet
                  agreed-upon deadlines without reasonable cause
                </li>
                <li>
                  <strong>Technical Issues:</strong> If the delivered solution
                  has significant technical problems that cannot be resolved
                </li>
              </ul>

              <h3
                className="text-xl font-medium text-gray-900"
                id="non-eligible-scenarios-heading"
              >
                3.2 Non-Eligible Scenarios
              </h3>
              <p className="text-gray-600">
                Refunds will not be provided in the following cases:
              </p>
              <ul
                aria-labelledby="non-eligible-scenarios-heading"
                className="list-disc text-gray-600"
              >
                <li>Work that has been completed and delivered</li>
                <li>Changes in project requirements after work has begun</li>
                <li>Delays caused by client-side issues or feedback</li>
                <li>Services that have been used or consumed</li>
                <li>Consulting sessions that have been completed</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="refund-process-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="refund-process-heading"
            >
              4. Refund Process
            </h2>
            <div>
              <h3
                className="text-xl font-medium text-gray-900"
                id="request-submission-heading"
              >
                4.1 Request Submission
              </h3>
              <p className="text-gray-600">
                To request a refund, please contact us at{" "}
                <a
                  href="mailto:kenny@ketryon.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  kenny@ketryon.com
                </a>{" "}
                with the following information:
              </p>
              <ul
                aria-labelledby="request-submission-heading"
                className="list-disc text-gray-600"
              >
                <li>Project or service reference number</li>
                <li>Detailed reason for the refund request</li>
                <li>Date of service or project initiation</li>
                <li>Any supporting documentation or evidence</li>
              </ul>

              <h3
                className="text-xl font-medium text-gray-900"
                id="review-process-heading"
              >
                4.2 Review Process
              </h3>
              <p className="text-gray-600">
                We will review your refund request within 5-7 business days and
                may request additional information if needed. Our team will
                assess the situation based on our service agreement and the
                specific circumstances.
              </p>

              <h3
                className="text-xl font-medium text-gray-900"
                id="refund-approval-heading"
              >
                4.3 Refund Approval and Processing
              </h3>
              <p className="text-gray-600">
                If your refund request is approved, we will process the refund
                within 10-14 business days. The refund will be issued to the
                original payment method used for the transaction.
              </p>
            </div>
          </section>

          <section aria-labelledby="partial-refunds-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="partial-refunds-heading"
            >
              5. Partial Refunds
            </h2>
            <p className="text-gray-600">
              In some cases, we may offer partial refunds based on the amount of
              work completed and the specific circumstances. This will be
              determined on a case-by-case basis and communicated clearly to
              you.
            </p>
          </section>

          <section aria-labelledby="cancellation-policy-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="cancellation-policy-heading"
            >
              6. Cancellation Policy
            </h2>
            <div>
              <h3
                className="text-xl font-medium text-gray-900"
                id="project-cancellation-heading"
              >
                6.1 Project Cancellation
              </h3>
              <p className="text-gray-600">
                If you need to cancel a project, please notify us as soon as
                possible. Cancellation fees may apply based on the stage of the
                project and work already completed.
              </p>

              <h3
                className="text-xl font-medium text-gray-900"
                id="consulting-cancellation-heading"
              >
                6.2 Consulting Session Cancellation
              </h3>
              <p className="text-gray-600">
                Consulting sessions can be cancelled up to 24 hours before the
                scheduled time without penalty. Cancellations made within 24
                hours may be subject to a cancellation fee.
              </p>
            </div>
          </section>

          <section aria-labelledby="dispute-resolution-heading">
            <h2
              className="text-2xl font-semibold text-gray-900"
              id="dispute-resolution-heading"
            >
              7. Dispute Resolution
            </h2>
            <p className="text-gray-600">
              If you disagree with our refund decision, we encourage you to
              contact us to discuss the matter further. We are committed to
              finding fair and reasonable solutions for all parties involved.
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
              If you have any questions about our refund policy or need to
              request a refund, please contact us at{" "}
              <a
                href="mailto:kenny@ketryon.com"
                className="text-blue-600 hover:text-blue-800"
              >
                kenny@ketryon.com
              </a>
              . We are here to help and ensure your satisfaction with our
              services.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
