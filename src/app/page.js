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

export default function Home() {
  const editorPicks = posts.slice(0, 6);
  const latestPosts = posts.slice(6, 18);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900">
      
      <HeroShowcase posts={posts} />

      {/* ✅ ABOUT + TRUST CONTENT */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-black">
            Dubai Trending – Practical UAE Guides for Real Life
          </h1>

          <p className="mt-4 text-slate-700">
            Dubai Trending is built to help people understand real life in the UAE —
            from jobs and visas to transport, cost of living, and everyday decisions
            that actually matter.
          </p>

          <p className="mt-3 text-slate-700">
            Most online guides explain things at a surface level. Here, the focus is
            on what actually happens — real costs, common mistakes, and practical
            decisions that make life easier.
          </p>

          <p className="mt-3 text-slate-700">
            Whether you&apos;re moving to Dubai or already living here, the goal is simple:
            clear, useful, and honest information you can actually use.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Written by Abdul Karim • UAE Practical Guides
          </p>

          <ToolModals tools={primaryTools} />
        </div>
      </section>

      {/* ✅ QUICK NAV */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-3xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-extrabold">Quick Categories</h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {quickCategories.map((item) => (
              <Link
                key={item.label}
                href={`/blog?category=${encodeURIComponent(item.category)}`}
                className="rounded-lg border bg-slate-100 px-3 py-2 text-center font-semibold hover:bg-white hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ EDITOR PICKS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <h2 className="text-2xl font-black mb-5">Editor Picks</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {editorPicks.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md"
            >
              <p className="text-xs text-red-600 font-semibold">{post.category}</p>
              <h3 className="mt-2 text-lg font-extrabold">{post.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ LATEST POSTS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="text-2xl font-black mb-5">Latest Articles</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border bg-white shadow-sm hover:shadow-lg"
            >
              <div className="relative h-44 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>

              <div className="p-4">
                <p className="text-xs text-blue-700 font-semibold">{post.category}</p>

                <h3 className="mt-2 text-lg font-extrabold">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {post.excerpt}
                </p>

                <p className="mt-3 text-xs text-slate-500">
                  {post.date} • {post.readTime}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-bold text-blue-700"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ✅ TRUST SECTION */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-green-50 p-6">
          <h2 className="text-2xl font-black">Why Trust This Blog</h2>

          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <li>✔ Real-world, experience-based insights</li>
            <li>✔ Regularly updated UAE guides</li>
            <li>✔ No clickbait or misleading info</li>
            <li>✔ Simple, practical explanations</li>
          </ul>
        </div>
      </section>

      {/* ✅ NEWSLETTER */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <div className="rounded-3xl border bg-blue-50 p-6">
          <h2 className="text-2xl font-black">Join Weekly Dubai Updates</h2>
          <p className="mt-2 text-sm text-slate-700">
            Get updates on jobs, documents, and practical Dubai insights.
          </p>
          <NewsletterSignup />
        </div>
      </section>

      {/* ✅ FINAL VALUE SECTION */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-black">What You’ll Find Here</h2>

          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <li>Practical job & visa guides</li>
            <li>Real cost of living breakdowns</li>
            <li>Step-by-step processes</li>
            <li>Clear and simple explanations</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
