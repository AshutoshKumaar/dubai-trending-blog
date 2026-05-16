export const metadata = {
  title: "About Dubai Trending",
  description:
    "Learn about Dubai Trending and how we publish practical, real-world guides for jobs, documents, and everyday life in Dubai.",
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

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Practical Dubai Guides Built Around Real-Life Situations
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700">
            Dubai Trending is an independent Dubai-focused website created to
            simplify everyday topics related to life in the UAE. The goal is not
            just to explain information, but to make it practical, understandable,
            and genuinely useful for people dealing with real situations.
          </p>

          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
            Many online guides only provide surface-level explanations. This
            platform focuses more on what actually happens in practice — real
            living costs, common mistakes, transport realities, job search
            challenges, and day-to-day decisions people face after moving to Dubai.
          </p>

          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
            Whether you are a job seeker, resident, expat, tourist, or someone
            planning a move to the UAE, Dubai Trending aims to provide clear,
            realistic, and experience-driven guidance.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Written and managed by <strong>Abdul Karim</strong> • UAE Research & Practical Guides
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">
            What This Website Covers
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            The website focuses on practical Dubai and UAE-related topics that
            people commonly search for and struggle to understand clearly.
          </p>

          <ul className="mt-5 grid gap-3 md:grid-cols-2 text-sm text-slate-700">
            <li>✔ Real cost of living and budgeting insights</li>
            <li>✔ Dubai jobs, hiring patterns, and career guidance</li>
            <li>✔ Visa, Emirates ID, and document-related guides</li>
            <li>✔ Public transport systems, Nol cards, and commuting tips</li>
            <li>✔ Business setup and practical UAE procedures</li>
            <li>✔ Everyday lifestyle situations for residents and expats</li>
          </ul>
        </div>
      </section>

      {/* HOW CONTENT IS CREATED */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">
            How Content Is Created
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            Articles are developed using a mix of research, publicly available
            information, commonly observed patterns, and practical situations
            people face while living or working in Dubai.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            The focus is always on clarity. Instead of overcomplicating topics,
            the goal is to explain them in a way that feels understandable and
            genuinely helpful for everyday readers.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            Wherever possible, information may be cross-checked using official
            UAE resources and publicly available government references.
          </p>

          <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-slate-700">
            <p>
              Official references used for research may include:
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://u.ae/en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 underline"
              >
                UAE Government Portal
              </a>

              <a
                href="https://www.mohre.gov.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 underline"
              >
                MOHRE
              </a>

              <a
                href="https://www.rta.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 underline"
              >
                Dubai RTA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL MISSION */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">
            Editorial Mission
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            The mission of Dubai Trending is to make Dubai-related information
            easier to understand for ordinary readers. Many people moving to the
            UAE struggle because important details are either unclear, outdated,
            or overly technical.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            This platform focuses on practical clarity — helping readers make
            more informed decisions without relying on confusing or misleading
            information.
          </p>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-3xl border bg-green-50 p-6">
          <h2 className="text-2xl font-black">
            Why Readers Trust This Website
          </h2>

          <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li>✔ Independent and reader-focused content</li>
            <li>✔ Practical explanations instead of clickbait</li>
            <li>✔ Regularly reviewed and updated information</li>
            <li>✔ Research-backed and experience-driven writing</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">
            Contact & Support
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            If you would like to suggest corrections, provide feedback, or ask
            questions related to published content, you can contact the support
            team using the email below.
          </p>

          <div className="mt-6 rounded-xl bg-slate-800 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
              Support Email
            </p>

            <p className="mt-2 text-xl font-black text-white">
              support@dubaitrendings.com
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}