import { BASE_URL } from "@/constants";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { MotionConfig } from "motion/react";
import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#2b7fff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Ketryon - Digital Agency | Transparent Software Services",
  description:
    "Ketryon is a digital agency providing software services through transparent processes and efficient workflows. We deliver exceptional solutions with clear communication and streamlined development.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "./",
    languages: {
      "en-US": "https://www.ketryon.com",
    },
  },
  openGraph: {
    title: "Ketryon - Digital Agency | Transparent Software Services",
    description:
      "Ketryon is a digital agency providing software services through transparent processes and efficient workflows. We deliver exceptional solutions with clear communication and streamlined development.",
    url: "./",
    siteName: "Ketryon",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ketryon - Your Trusted Digital Agency Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketryon - Digital Agency | Transparent Software Services",
    description:
      "Ketryon is a digital agency providing software services through transparent processes and efficient workflows. We deliver exceptional solutions with clear communication and streamlined development.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5DF5DBCR');
            `,
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ketryon",
              url: "https://www.ketryon.com",
              logo: "https://www.ketryon.com/logo.png",
              sameAs: [
                "https://twitter.com/ktranish",
                "https://github.com/ktranish",
                "https://linkedin.com/in/ktranish",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@ketryon.com",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className={cn("antialiased", sora.className)}>
        <noscript>
          <iframe
            title="gtm"
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DF5DBCR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <MotionConfig reducedMotion="user">
          {children}
          <Toaster />
          <Analytics />
        </MotionConfig>
      </body>
    </html>
  );
}
