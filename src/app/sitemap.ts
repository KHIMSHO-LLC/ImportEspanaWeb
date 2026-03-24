import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog-data";
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

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/result`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
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

  // Blog post pages
  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

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
