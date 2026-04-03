import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/_next/static/", "/icon"],
    },
    sitemap: "https://importespana.com/sitemap.xml",
  };
}
