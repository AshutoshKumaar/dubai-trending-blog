import Link from "next/link";
import Image from "next/image";
import { posts } from "@/content/posts";

export const metadata = {
  title: "All Blogs",
  description: "Browse all Dubai Trending Blog articles with categories and full guides.",
  alternates: {
    canonical: "/blog",
  },
};

const categoryAliases = {
  living: "living in dubai",
  jobs: "jobs",
  labour: "labour law",
  travel: "travel",
  business: "business",
  docs: "documents",
};

function normalizeCategory(value) {
  const key = value.trim().toLowerCase();
  return categoryAliases[key] ?? key;
}

export default async function BlogIndexPage({ searchParams }) {
  const params = await searchParams;
  const rawCategory =
    typeof params?.category === "string" ? params.category : "";
  const normalizedCategory = rawCategory ? normalizeCategory(rawCategory) : "";
  const filteredPosts = normalizedCategory
    ? posts.filter(
        (post) => post.category.toLowerCase() === normalizedCategory
      )
    : posts;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Blog Directory</p>
            <h1 className="mt-1 text-4xl font-black">
              {rawCategory ? `${rawCategory} Posts` : "All 10 Blog Posts"}
            </h1>
            {rawCategory ? (
              <Link
                href="/blog"
                className="mt-2 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                Clear filter
              </Link>
            ) : null}
          </div>
          <Link href="/" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
            Back to Home
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-44 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{post.category}</p>
                <h2 className="mt-2 line-clamp-2 text-lg font-extrabold leading-snug transition group-hover:text-blue-800">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">{post.excerpt}</p>
                <p className="mt-3 text-xs text-slate-500">
                  {post.date} • {post.readTime}
                </p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-bold text-slate-900 transition hover:text-blue-700">
                  Open full blog -&gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
        {filteredPosts.length === 0 ? (
          <p className="mt-6 text-sm text-slate-600">
            No posts found for this category yet.
          </p>
        ) : null}
      </section>
    </main>
  );
}


