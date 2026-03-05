import Link from "next/link";
import Image from "next/image";
import HeroShowcase from "@/components/HeroShowcase";
import ToolModals from "@/components/ToolModals";
import NewsletterSignup from "@/components/NewsletterSignup";
import { posts } from "@/content/posts";

const stats = [
  { label: "Published Guides", value: "120+" },
  { label: "Monthly Readers", value: "45K+" },
  { label: "Updated Weekly", value: "4x" },
  { label: "Core Categories", value: "10" },
];

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
  title: "Dubai Trending Blog | Standard Web Blog with 10 Articles",
  description:
    "Explore 10 full Dubai-focused blog posts with images, category sections, and smooth navigation.",
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

      <section className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 px-4 pb-8 sm:grid-cols-4 sm:px-6">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-black text-red-600">{item.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Welcome to Dubai Trending Blog</h2>
          <p className="mt-3 text-slate-700">
            Daily practical posts on UAE jobs, Emirates ID, visa updates, transport,
            labour rules, and local lifestyle planning.
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

          <div className="rounded-3xl border border-amber-300 bg-amber-50 p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Demo Ad</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">Sponsored Placement</h3>
            <p className="mt-2 text-sm text-slate-700">
              This is a demo ad block. Replace with approved AdSense unit after policy review.
            </p>
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

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Featured Ad Space</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Promoted Partner Message</h3>
              <p className="mt-1 text-sm text-slate-700">
                This is a mid-page ad placement demo. Replace this block with your approved AdSense unit.
              </p>
            </div>
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-700">
              Learn More
            </button>
          </div>
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
          <h2 className="text-2xl font-black">Why this blog is AdSense-friendly</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            <li>Original long-form content</li>
            <li>Clean navigation and internal linking</li>
            <li>Dedicated article pages with clear structure</li>
            <li>No misleading ad placement</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
