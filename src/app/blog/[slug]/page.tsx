import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog-data";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://importespana.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "ImportEspana",
    },
    publisher: {
      "@type": "Organization",
      name: "ImportEspana",
      url: "https://importespana.com",
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm mb-8" style={{ color: "var(--text-tertiary)" }}>
        <Link href="/" className="transition-colors" style={{ color: "var(--brand-blue)" }}>
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="transition-colors" style={{ color: "var(--brand-blue)" }}>
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span>{post.title}</span>
      </nav>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: "var(--pill-active-bg)",
              color: "var(--brand-blue-light)",
              border: "1px solid var(--pill-active-border)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm mb-8 pb-8 border-b" style={{ color: "var(--text-tertiary)", borderBottomColor: "var(--glass-border)" }}>
        <span>
          📅{" "}
          {new Date(post.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span>⏱ {post.readingTime} min lectura</span>
      </div>

      {/* Content */}
      <article
        className="max-w-none"
        style={{
          color: "var(--text-primary)",
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="mt-16 pt-8" style={{ borderTopColor: "var(--glass-border)" }}>
          <h2 className="text-2xl font-bold mb-6 heading-section">
            Artículos Relacionados
          </h2>
          <div className="grid gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="block rounded-lg p-4 transition-all"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  color: "var(--text-primary)",
                }}
              >
                <h3 className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  {r.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to blog */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="font-medium transition-colors"
          style={{ color: "var(--brand-blue)" }}
        >
          ← Volver al Blog
        </Link>
      </div>
    </div>
  );
}
