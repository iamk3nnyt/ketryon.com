import { BASE_URL } from "@/constants";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { MotionConfig } from "motion/react";
import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/footer";
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

const baseMetadata = buildMetadata({
  type: "website",
  title: "Ketryon - Web Development & Design",
  description:
    "Ketryon is a technology company focused on building innovative web solutions. We specialize in web development, design, and creating performant digital experiences.",
  path: "/",
  organization: {
    name: "Ketryon",
    url: BASE_URL,
    logo: BASE_URL + "/logo.png",
    email: "kenny@ketryon.com",
  },
  image: {
    url: "/og.png",
    width: 1200,
    height: 630,
    alt: "Ketryon - Web Development & Design",
  },
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(BASE_URL),
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
        <Script id="gtm-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }

            // Set default consent to 'denied' as a placeholder
            // Determine actual values based on customer's own requirements
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', true);
          `}
        </Script>
        <Script
          id="CookieConsent"
          src="https://policy.app.cookieinformation.com/uc.js"
          data-culture="EN"
          data-gcm-version="2.0"
        />
        {/* Google Tag Manager (only in production) */}
        {process.env.NODE_ENV === "production" && (
          <Script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_TRACKER}');
              `,
            }}
          />
        )}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ketryon",
              url: BASE_URL,
              logo: BASE_URL + "/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "kenny@ketryon.com",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className={cn("antialiased", sora.className)}>
        {process.env.NODE_ENV === "production" && (
          <noscript>
            <iframe
              title="gtm"
              src={
                "https://www.googletagmanager.com/ns.html?id=" +
                process.env.NEXT_PUBLIC_GTM_TRACKER
              }
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
        <MotionConfig reducedMotion="user">
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </MotionConfig>
      </body>
    </html>
  );
}
