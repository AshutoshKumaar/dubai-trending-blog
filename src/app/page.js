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
  { label: "Documents", category: "Documents" },
];

const primaryTools = tools.slice(0, 4);

export default function Home() {
  const editorPicks = posts.slice(0, 6);
  const latestPosts = posts.slice(6, 18);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900">

      {/* HERO */}
      <HeroShowcase posts={posts} />

      {/* MAIN INTRO */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-black leading-tight sm:text-4xl">
            Dubai Trending – Practical UAE Guides for Everyday Life
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            Dubai Trending is an independent UAE-focused platform created to help
            readers better understand practical life in Dubai. The website covers
            topics people commonly struggle with — including jobs, visas, transport,
            living costs, Emirates ID procedures, and everyday decisions connected
            to moving or living in the UAE.
          </p>

          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
            Many online articles explain Dubai only at a surface level. This
            platform focuses more on realistic situations, practical expectations,
            common mistakes, and useful context that helps readers make better-informed
            decisions.
          </p>

          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
            Whether you are a resident, job seeker, expat, tourist, or someone
            researching opportunities in the UAE, the goal is to make information
            easier to understand without unnecessary complexity.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700">
            The platform was created to simplify Dubai-related topics that are
            often confusing, outdated, or explained without enough practical detail.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Written and managed by <strong>Abdul Karim</strong> • UAE Research & Practical Guides
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Last updated: May 2026
          </p>

          <div className="mt-6">
            <ToolModals tools={primaryTools} />
          </div>
        </div>
      </section>

      {/* QUICK CATEGORIES */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6">
        <div className="rounded-3xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-extrabold">
            Explore Popular Categories
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Browse practical UAE-focused topics covering jobs, documents,
            business setup, travel, labour law, and everyday life in Dubai.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {quickCategories.map((item) => (
              <Link
                key={item.label}
                href={`/blog?category=${encodeURIComponent(item.category)}`}
                className="rounded-xl border bg-slate-100 px-4 py-3 text-center font-semibold transition hover:bg-white hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR TOPICS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">
            Popular Dubai Topics Readers Explore
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Readers commonly use Dubai Trending to better understand practical
            topics related to life, work, transport, and procedures in the UAE.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Dubai Jobs",
              "Cost of Living",
              "UAE Visa Rules",
              "Emirates ID",
              "Dubai Metro",
              "Business Setup",
              "Dubai Rent",
              "Labour Law",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL APPROACH */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">
            Editorial Approach
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            Dubai Trending focuses on practical clarity rather than exaggerated
            claims or misleading shortcuts. Articles are written to help readers
            better understand everyday situations connected to life in Dubai.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            The platform prioritizes readability, practical context, and realistic
            explanations instead of overly technical language or generic summaries.
          </p>
        </div>
      </section>

      {/* EDITOR PICKS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black">
            Editor Picks
          </h2>

          <Link
            href="/blog"
            className="text-sm font-bold text-blue-700"
          >
            View all →
          </Link>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {editorPicks.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                {post.category}
              </p>

              <h3 className="mt-3 text-lg font-extrabold leading-snug">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {post.excerpt}
              </p>

              <p className="mt-4 text-xs text-slate-500">
                {post.date} • {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* COMMON QUESTIONS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">
            Common Questions Readers Ask
          </h2>

          <div className="mt-5 space-y-6">
            <div>
              <h3 className="font-bold text-lg">
                Is Dubai expensive for new residents?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                Costs depend heavily on rent, transport choices, and lifestyle.
                Dubai Trending publishes practical budgeting guides to help readers
                understand realistic monthly expenses instead of relying on assumptions.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                How difficult is it to find a job in Dubai?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                Hiring conditions vary across industries and experience levels.
                The platform focuses on practical job-search guidance, application
                preparation, and common mistakes many candidates make.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Which official UAE platforms are useful?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                Readers often use official UAE websites for labour services,
                Emirates ID procedures, transport information, and government updates.
                Relevant official resources are referenced where appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="text-2xl font-black mb-5">
          Latest Articles
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  {post.category}
                </p>

                <h3 className="mt-3 text-lg font-extrabold leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {post.excerpt}
                </p>

                <p className="mt-4 text-xs text-slate-500">
                  {post.date} • {post.readTime}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-bold text-blue-700"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OFFICIAL UAE RESOURCES */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">
            Useful UAE Official Resources
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Some articles on Dubai Trending reference official UAE platforms
            for public information, procedural guidance, and verification.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://u.ae/en"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border p-5 transition hover:bg-slate-50"
            >
              <p className="font-black">
                UAE Government
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Public services and official UAE information
              </p>
            </a>

            <a
              href="https://www.mohre.gov.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border p-5 transition hover:bg-slate-50"
            >
              <p className="font-black">
                MOHRE
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Labour law and employment services
              </p>
            </a>

            <a
              href="https://www.rta.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border p-5 transition hover:bg-slate-50"
            >
              <p className="font-black">
                Dubai RTA
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Roads, metro, Nol cards, and transport
              </p>
            </a>

            <a
              href="https://icp.gov.ae/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border p-5 transition hover:bg-slate-50"
            >
              <p className="font-black">
                ICP UAE
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Emirates ID and visa-related services
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-green-50 p-6">
          <h2 className="text-2xl font-black">
            Why Readers Trust Dubai Trending
          </h2>

          <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 sm:grid-cols-2">
            <li>✔ Practical and experience-driven explanations</li>
            <li>✔ Reader-focused UAE guides and resources</li>
            <li>✔ Regularly reviewed and updated information</li>
            <li>✔ Clear explanations without misleading shortcuts</li>
          </ul>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <div className="rounded-3xl border bg-blue-50 p-6">
          <h2 className="text-2xl font-black">
            Join Weekly Dubai Updates
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
            Get practical updates related to Dubai jobs, documents,
            transport systems, and everyday UAE guidance.
          </p>

          <div className="mt-5">
            <NewsletterSignup />
          </div>
        </div>
      </section>

    </main>
  );
}