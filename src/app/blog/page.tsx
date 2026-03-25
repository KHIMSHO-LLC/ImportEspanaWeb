import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Guías de Importación de Coches en España",
  description:
    "Artículos, guías y consejos sobre importación de vehículos en España. Impuestos, matriculación, ITP, CO2 y más.",
  alternates: {
    canonical: "https://importespana.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Blog ImportEspana
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Guías completas, consejos y novedades sobre la importación y
          matriculación de vehículos en España.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-[var(--text-tertiary)]">
          No hay artículos todavía. ¡Vuelve pronto!
        </p>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[var(--surface-elevated)] rounded-xl border border-[var(--surface-border)] p-6 hover:shadow-lg hover:border-[var(--brand-blue-light)] transition-all duration-200 group"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-blue)] transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
                <span>
                  📅{" "}
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>⏱ {post.readingTime} min lectura</span>
                <span className="uppercase">{post.language}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
