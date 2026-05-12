import { MetadataRoute } from "next";
import { getAllPosts, getCounterpartSlug, isEnglishSlug } from "@/lib/blog-data";
import { REGIONS } from "@/constants/Regions";
import { COUNTRIES } from "@/constants/Countries";
import { TOP_SEO_MODELS, slugify } from "@/utils/seo/topCars";

const CITY_SLUGS = [
  "madrid",
  "barcelona",
  "sevilla",
  "valencia",
  "zaragoza",
  "bilbao",
  "malaga",
  "alicante",
  "murcia",
  "palma",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://importespana.com";

  // Note: /result is intentionally excluded — it's noindex,nofollow
  // (personalized calculation output, no SEO value).
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/itp`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/preguntas-frecuentes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/metodologia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/importar-coche-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/valoracion-boe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/coches`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Region-specific ITP / import pages (17 pages)
  const regionPages: MetadataRoute.Sitemap = REGIONS.map((region) => ({
    url: `${baseUrl}/importar-coche/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Country-specific import guide pages (7 pages)
  const countryPages: MetadataRoute.Sitemap = COUNTRIES.map((country) => ({
    url: `${baseUrl}/importar-desde/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // City-specific pages (10 cities)
  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${baseUrl}/importar-coche-${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog post pages — emit hreflang alternates linking ES↔EN pairs so Google
  // treats them as language alternates instead of duplicate content.
  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => {
    const isEnglish = isEnglishSlug(post.slug);
    const counterpart = getCounterpartSlug(post.slug);
    const selfUrl = `${baseUrl}/blog/${post.slug}`;
    const counterpartUrl = counterpart
      ? `${baseUrl}/blog/${counterpart}`
      : null;

    const esUrl = isEnglish ? counterpartUrl : selfUrl;
    const enUrl = isEnglish ? selfUrl : counterpartUrl;

    const languages: Record<string, string> = {};
    if (esUrl) languages["es-ES"] = esUrl;
    if (enUrl) languages["en-US"] = enUrl;
    languages["x-default"] = esUrl ?? selfUrl;

    return {
      url: selfUrl,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages },
    };
  });

  // Car model pages
  const carPages: MetadataRoute.Sitemap = TOP_SEO_MODELS.map((car) => ({
    url: `${baseUrl}/coche/${slugify(`${car.brand}-${car.modelQuery}`)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...regionPages,
    ...countryPages,
    ...cityPages,
    ...blogPages,
    ...carPages,
  ];
}
