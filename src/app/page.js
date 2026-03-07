import Link from "next/link";
import Image from "next/image";
import HeroShowcase from "@/components/HeroShowcase";
import ToolModals from "@/components/ToolModals";
import NewsletterSignup from "@/components/NewsletterSignup";
import { posts } from "@/content/posts";

const tools = [
  "Emirates ID Renewal Checklist",
  "UAE Job Application Planner",
  "Dubai Cost Calculator",
  "Visa Document Organizer",
  "Labour Complaint Steps",
  "Nol Card Budget Tracker",
];

const quickCategories = [
  { label: "Living", category: "Living in Dubai" },
  { label: "Jobs", category: "Jobs" },
  { label: "Labour", category: "Labour Law" },
  { label: "Travel", category: "Travel" },
  { label: "Business", category: "Business" },
  { label: "Docs", category: "Documents" },
];

const primaryTools = tools.slice(0, 4);

export const metadata = {
  title: "Dubai Trending | Practical Dubai Guides, Jobs, Documents, and City Living",
  description:
    "Read practical Dubai guides covering jobs, documents, transport, neighborhood choices, and everyday city living.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const latestPosts = posts.slice(5, 10);
  const editorPicks = posts.slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900">
      <HeroShowcase posts={posts} />

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Welcome to Dubai Trending Blog</h2>
          <p className="mt-3 text-slate-700">
            Dubai Trending publishes practical weekly guides on jobs, documents,
            transport, neighborhood choices, and everyday city living.
          </p>
          <p className="mt-3 text-slate-700">
            The goal is simple: help readers understand common Dubai topics in
            clear English without filler, exaggerated claims, or confusing layouts.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Dubai", "UAE Jobs", "Visa", "Emirates ID", "Labour"].map((tag) => (
              <span key={tag} className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                {tag}
              </span>
            ))}
          </div>

          <ToolModals tools={primaryTools} />
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-extrabold">Quick Categories</h2>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {quickCategories.map((item) => (
                <Link
                  key={item.label}
                  href={`/blog?category=${encodeURIComponent(item.category)}`}
                  className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-center font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-black">Editor Picks</h2>
          <Link href="/blog" className="text-sm font-bold text-blue-700 transition hover:text-blue-900">
            Explore all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {editorPicks.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600">{post.category}</p>
              <h3 className="mt-2 line-clamp-2 text-lg font-extrabold group-hover:text-blue-700">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-black">More Latest Blogs</h2>
          <Link href="/blog" className="text-sm font-bold text-blue-700 transition hover:text-blue-900">
            View all 10 posts
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{post.category}</p>
                <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-snug transition group-hover:text-blue-800">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">{post.excerpt}</p>
                <p className="mt-3 text-xs text-slate-500">
                  {post.date} • {post.readTime}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-bold text-slate-900 transition hover:text-blue-700"
                >
                  Read article -&gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Popular Reader Tools</h2>
          <ToolModals tools={tools} className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-2xl font-black text-slate-900">Join Weekly Dubai Updates</h2>
          <p className="mt-2 text-sm text-slate-700">
            Get practical blog updates on jobs, documents, local services, and city living.
          </p>
          <NewsletterSignup />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
          <h2 className="text-2xl font-black">What Readers Can Expect</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            <li>Original long-form articles with clear structure</li>
            <li>Simple navigation across blog categories and legal pages</li>
            <li>Practical topics for residents, expats, visitors, and job seekers</li>
            <li>Readable English written for general audiences</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
