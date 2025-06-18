import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-y-8 px-4 py-16">
      <Link
        href="/"
        className="group inline-flex w-fit items-center gap-x-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <header className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Terms of Service
        </h1>
        <p className="text-gray-600">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </header>

      <div className="prose prose-gray max-w-none">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Ketryon. By accessing our website and using our services,
          you agree to these terms of service. Please read them carefully.
        </p>

        <h2>2. Definitions</h2>
        <ul>
          <li>
            <strong>"Service"</strong> refers to the software development and
            consulting services provided by Ketryon.
          </li>
          <li>
            <strong>"Client"</strong> refers to any individual or organization
            using our services.
          </li>
          <li>
            <strong>"Project"</strong> refers to any specific work or
            deliverable agreed upon between Ketryon and the Client.
          </li>
        </ul>

        <h2>3. Services</h2>
        <p>
          Ketryon provides software development, consulting, and related
          services. The specific scope of services will be defined in individual
          project agreements or statements of work.
        </p>

        <h2>4. Client Responsibilities</h2>
        <p>Clients agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Respond to requests for information in a timely manner</li>
          <li>Review and provide feedback on deliverables</li>
          <li>Maintain confidentiality of proprietary information</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          Unless otherwise specified in a project agreement, all intellectual
          property rights in the deliverables will be transferred to the Client
          upon full payment. Ketryon retains rights to:
        </p>
        <ul>
          <li>Pre-existing intellectual property</li>
          <li>General knowledge and expertise</li>
          <li>Open-source components and tools</li>
        </ul>

        <h2>6. Confidentiality</h2>
        <p>
          Both parties agree to maintain the confidentiality of proprietary
          information shared during the course of the project. This obligation
          survives the termination of the agreement.
        </p>

        <h2>7. Payment Terms</h2>
        <p>
          Payment terms will be specified in individual project agreements.
          Generally:
        </p>
        <ul>
          <li>Invoices are due within 30 days</li>
          <li>Late payments may incur interest charges</li>
          <li>All fees are exclusive of applicable taxes</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>
          Ketryon's liability is limited to the amount paid by the Client for
          the specific project. We are not liable for:
        </p>
        <ul>
          <li>Indirect or consequential damages</li>
          <li>Loss of profits or business interruption</li>
          <li>Data loss or security breaches</li>
        </ul>

        <h2>9. Termination</h2>
        <p>
          Either party may terminate a project agreement with written notice.
          Upon termination:
        </p>
        <ul>
          <li>Client pays for work completed</li>
          <li>Ketryon delivers completed work</li>
          <li>Confidentiality obligations continue</li>
        </ul>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be effective upon posting to our website. Continued use of our
          services constitutes acceptance of modified terms.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          For questions about these terms, please contact us at{" "}
          <a
            href="mailto:kenny@ketryon.com"
            className="text-blue-600 hover:text-blue-700"
          >
            kenny@ketryon.com
          </a>
        </p>
      </div>
    </main>
  );
}
