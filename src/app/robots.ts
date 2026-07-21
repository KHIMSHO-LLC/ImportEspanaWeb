import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /_next/static must stay crawlable — blocking it hides CSS/JS from
      // Googlebot, which then renders every page unstyled.
      disallow: ["/private/", "/icon"],
    },
    sitemap: "https://importespana.com/sitemap.xml",
  };
}
