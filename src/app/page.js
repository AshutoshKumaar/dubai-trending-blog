import Image from "next/image";

const featuredPosts = [
  {
    title: "Dubai Cost of Living 2026: Rent, Transport, Groceries, and Savings Tips",
    category: "Living in Dubai",
    publishedAt: "March 3, 2026",
    excerpt:
      "A practical month-by-month budgeting breakdown for professionals, families, and students moving to Dubai.",
  },
  {
    title: "Best Areas to Live in Dubai for Families and Working Professionals",
    category: "Neighborhood Guide",
    publishedAt: "March 1, 2026",
    excerpt:
      "Compare commute, school access, rental ranges, and lifestyle across top residential communities.",
  },
  {
    title: "Dubai Weekend Guide: Affordable Places, Events, and Local Food Spots",
    category: "Lifestyle",
    publishedAt: "February 27, 2026",
    excerpt:
      "Curated weekend ideas with realistic budgets so readers can plan better and avoid tourist traps.",
  },
];

const faqs = [
  {
    question: "What kind of content will Dubai Trending Blog publish?",
    answer:
      "We publish original guides, local trend explainers, and practical city updates for residents, expats, and visitors in Dubai.",
  },
  {
    question: "How often is this blog updated?",
    answer:
      "New and refreshed posts are added every week, with factual updates when regulations, prices, or city services change.",
  },
  {
    question: "Is the information written by humans?",
    answer:
      "Yes. Content is edited with a clear editorial process, transparent sources, and a focus on helpful reader-first writing.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Dubai Trending Blog",
  description:
    "Original Dubai-focused blog covering local lifestyle, city updates, travel plans, and business insights.",
  url: "https://dubaitrendingblog.com",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "Dubai Trending Blog",
  },
};

export const metadata = {
  title: "Dubai Trending Blog Home",
  description:
    "Read practical Dubai guides on lifestyle, travel, real estate, and local business trends with clear and trustworthy information.",
  keywords: [
    "Dubai blog",
    "Dubai trending news",
    "Dubai lifestyle",
    "Dubai travel guide",
    "Dubai cost of living",
    "Dubai local updates",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-lg font-bold tracking-tight">Dubai Trending Blog</p>
          <nav className="flex items-center gap-5 text-sm font-medium text-slate-700">
            <a href="#latest" className="hover:text-slate-900">
              Latest
            </a>
            <a href="#featured" className="hover:text-slate-900">
              Featured
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Updated: March 4, 2026
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
            Dubai Trending Blog: Reliable Local Insights for Lifestyle, Travel,
            and Business
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            This blog is built for readers who want useful Dubai information
            without noise. We focus on practical guides, verified updates, and
            easy-to-understand explainers that help people make better daily
            decisions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              Reader-first content
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              SEO-ready structure
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              Weekly updates
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <Image
            src="/globe.svg"
            alt="Dubai global city trends illustration"
            width={420}
            height={260}
            className="mx-auto h-52 w-auto"
            priority
          />
          <p className="mt-3 text-center text-sm text-slate-600">
            Curated local insights with clear, practical, and trustworthy blog
            content.
          </p>
        </div>
      </section>

      <section id="latest" className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Image src="/window.svg" alt="City life icon" width={36} height={36} />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              City Life
            </p>
            <h2 className="mt-2 text-lg font-bold">
              Rent Trends, Commute Updates, and Family Living Tips
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Weekly practical updates for residents and new arrivals.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Image src="/globe.svg" alt="Travel icon" width={36} height={36} />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Travel
            </p>
            <h2 className="mt-2 text-lg font-bold">
              Budget-Friendly Dubai Itineraries and Seasonal Guides
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Smart plans for weekend exploration and first-time visitors.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Image
              src="/file.svg"
              alt="Business insights icon"
              width={36}
              height={36}
            />
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Business
            </p>
            <h2 className="mt-2 text-lg font-bold">
              SME Growth Insights, Digital Marketing, and Local Market Signals
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Reader-first breakdowns of business opportunities in Dubai.
            </p>
          </article>
        </div>
      </section>

      <section
        id="featured"
        className="mx-auto w-full max-w-6xl border-y border-slate-200 bg-white px-4 py-12 sm:px-6"
      >
        <h2 className="text-2xl font-extrabold sm:text-3xl">Featured Posts</h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          Freshly published content crafted to solve common Dubai living and
          travel questions with clear, structured guidance.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                {post.category}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-snug">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <p className="mt-4 text-xs text-slate-500">
                Published: {post.publishedAt}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <article className="max-w-none rounded-3xl bg-slate-900 px-6 py-8 text-slate-100 sm:px-8">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Why Readers Trust Dubai Trending Blog
          </h2>
          <p className="mt-4 leading-7 text-slate-200">
            We focus on clear, useful writing designed to help people in real
            situations, whether they are moving to Dubai, planning their budget,
            or exploring better neighborhoods. Every article follows a simple
            editorial promise: helpful first, clear second, and updated when
            facts change.
          </p>
          <h3 className="mt-5 text-lg font-bold">What You Can Expect</h3>
          <p className="mt-2 leading-7 text-slate-200">
            You will find practical comparisons, transparent assumptions, and
            guides written in plain language. We avoid vague claims and publish
            content that users can apply immediately.
          </p>
          <h3 className="mt-5 text-lg font-bold">Editorial Approach</h3>
          <p className="mt-2 leading-7 text-slate-200">
            Content is structured for readability with proper headings, concise
            summaries, and fact-checking before updates. This improves user
            experience and search relevance while keeping quality consistent.
          </p>
        </article>
      </section>

      <section id="faq" className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-5 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                {item.question}
              </summary>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Dubai Trending Blog. All rights reserved.</p>
          <p>Editorial-first content for residents, expats, and visitors.</p>
        </div>
      </footer>
    </main>
  );
}
