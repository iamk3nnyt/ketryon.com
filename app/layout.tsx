import { Footer } from "@/components/footer";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MotionConfig } from "motion/react";
import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
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

const baseMetadata = buildMetadata(
  {
    title: "Ketryon - Web Development & Design",
    description:
      "Ketryon is a technology company focused on building innovative web solutions. We specialize in web development, design, and creating performant digital experiences.",
    path: "/",
    schema: {
      type: "Organization",
      name: "Ketryon",
      url: siteConfig.siteUrl,
      logo: siteConfig.siteUrl + siteConfig.defaultImage.url,
      email: "kenny@ketryon.com",
    },
  },
  siteConfig,
);

export const metadata: Metadata = {
  ...baseMetadata,
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
          {children}
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
