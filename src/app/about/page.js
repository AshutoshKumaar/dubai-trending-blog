export const metadata = {
  title: "About Dubai Trending",
  description:
    "Learn about Dubai Trending and how we publish practical, real-world guides for jobs, documents, and daily life in Dubai.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            About Dubai Trending
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Practical Dubai Guides Built on Real Experiences
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-700">
            Dubai Trending is an independent blog focused on simplifying everyday life in the UAE.
            The goal is not just to explain topics — but to make them actually understandable
            and useful in real situations.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-700">
            Most information online explains things at a surface level. What we focus on instead
            is what actually happens — real costs, common mistakes, and practical decisions
            that people face after moving to Dubai.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-700">
            Whether you're a job seeker, expat, or someone planning to move, this platform is
            designed to give you clear and realistic guidance.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Written and managed by <strong>Abdul Karim</strong> • UAE Research & Practical Guides
          </p>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">What This Blog Covers</h2>

          <ul className="mt-5 grid gap-3 md:grid-cols-2 text-sm text-slate-700">
            <li>✔ Cost of living and real monthly expenses</li>
            <li>✔ Jobs, hiring patterns, and application tips</li>
            <li>✔ Visa, Emirates ID, and documentation guides</li>
            <li>✔ Transport systems like metro, Nol card, and travel</li>
            <li>✔ Daily life decisions for residents and expats</li>
            <li>✔ Practical insights based on real situations</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">How Content Is Created</h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            Every article is written based on real patterns observed across expat experiences,
            public resources, and commonly faced problems. The focus is on clarity — not
            complicated explanations.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Topics are selected based on what people actually search for and struggle with,
            such as job applications, cost planning, and navigating local systems.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Wherever possible, information is cross-checked with official UAE sources to
            maintain accuracy.
          </p>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-green-50 p-6">
          <h2 className="text-2xl font-black">Why You Can Trust This Site</h2>

          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 text-slate-700">
            <li>✔ Independent content (no misleading promotions)</li>
            <li>✔ Practical, experience-based insights</li>
            <li>✔ Regularly updated articles</li>
            <li>✔ Written for real-life use, not just reading</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Contact & Support</h2>

          <p className="mt-4 text-sm text-slate-700">
            For feedback, corrections, or content-related queries, you can reach out via email.
          </p>

          <div className="mt-5 rounded-xl bg-amber-50 p-4">
            <p className="text-sm font-bold">support@dubaitrendings.com</p>
          </div>
        </div>
      </section>

    </main>
  );
}