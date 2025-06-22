import { BASE_URL } from "@/constants";
import { type MetadataConfig } from "./metadata";

export const siteConfig: Omit<MetadataConfig, "schema"> = {
  siteUrl: BASE_URL,
  siteName: "ketryon.com",
  defaultImage: {
    url: "/og.png",
    width: 1200,
    height: 630,
  },
  locale: "en_US",
  inLanguage: "en-US",
  article: {
    section: "Ketryon",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@itsk3nny_",
  },
};
