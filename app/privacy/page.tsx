import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-y-8 px-4 py-16">
      {/* Back Button */}
      <Link
        href="/"
        className="group inline-flex w-fit items-center gap-x-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      {/* Header */}
      <header className="flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Privacy Policy
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

      {/* Content */}
      <div className="prose prose-gray max-w-none">
        <h2>1. Introduction</h2>
        <p>
          At Ketryon, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website or use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Email address</li>
          <li>Company information</li>
          <li>Project requirements and specifications</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we automatically collect:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent</li>
          <li>Referring website</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information for:</p>
        <ul>
          <li>Providing and improving our services</li>
          <li>Communicating with you about projects</li>
          <li>Sending important updates and notifications</li>
          <li>Analyzing website usage and performance</li>
          <li>Preventing fraud and ensuring security</li>
        </ul>

        <h2>4. Information Sharing</h2>
        <p>
          We do not sell or rent your personal information. We may share your
          information with:
        </p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Legal authorities when required by law</li>
          <li>Business partners with your consent</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information, including:
        </p>
        <ul>
          <li>Encryption of sensitive data</li>
          <li>Regular security assessments</li>
          <li>Access controls and authentication</li>
          <li>Secure data storage and transmission</li>
        </ul>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Withdraw consent</li>
        </ul>

        <h2>7. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to improve your
          experience. You can control cookie settings through your browser
          preferences.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices and encourage you to review
          their privacy policies.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under 18 years of age.
          We do not knowingly collect personal information from children.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of
          any material changes by posting the new policy on this page and
          updating the "Last updated" date.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
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
