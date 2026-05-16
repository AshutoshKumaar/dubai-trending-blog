export const metadata = {
  title: "Editorial Policy",
  description:
    "Learn how Dubai Trending creates, reviews, and updates content to ensure clarity, accuracy, and reader trust.",
};

const editorialSections = [
  {
    title: "Reader-First Editorial Standard",
    text:
      "Every article on Dubai Trending is written with a simple goal — to be genuinely useful for the reader. Instead of focusing on clickbait or filler content, the priority is clarity, practical value, and easy understanding of real-world topics.",
  },
  {
    title: "Topic Selection",
    text:
      "Content topics are selected based on real user needs and common search patterns related to Dubai. This includes jobs, cost of living, visa processes, transport systems, and everyday decisions that people actually face.",
  },
  {
    title: "Writing and Review Process",
    text:
      "Articles are written in a clear and structured format so that readers can quickly understand the topic. Before publishing, content is reviewed for readability, accuracy, and usefulness to avoid confusion or unnecessary complexity.",
  },
  {
    title: "Experience and Research Basis",
    text:
      "Content is developed using a mix of research, commonly observed patterns, and publicly available information. Wherever necessary, official UAE sources are considered to improve reliability and factual accuracy.",
  },
  {
    title: "Updates and Revisions",
    text:
      "Dubai-related information can change over time. Articles are updated when new details become available, processes change, or better clarity can be provided to readers.",
  },
  {
    title: "Corrections Policy",
    text:
      "If any factual issue or outdated information is identified, the content is reviewed and corrected as needed. The goal is to maintain accuracy and reduce confusion for readers.",
  },
  {
    title: "Advertising and Editorial Independence",
    text:
      "Advertising or sponsored placements do not influence editorial content. All articles are created independently to ensure that information remains useful, unbiased, and reader-focused.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Editorial Policy
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            How Content Is Created and Maintained on Dubai Trending
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            This page explains how Dubai Trending selects topics, writes content,
            and maintains accuracy over time. The goal is to keep the publishing
            process transparent so readers understand how information is created,
            reviewed, and updated.
          </p>

          <p className="mt-3 max-w-4xl text-base leading-8 text-slate-700">
            The focus is always on practical clarity — helping readers understand
            real-life situations in Dubai without unnecessary complexity or
            misleading information.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Managed by Abdul Karim • UAE Content & Research
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {editorialSections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-black">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                {section.text}
              </p>

              {section.title === "Experience and Research Basis" && (
                <div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-slate-700">
                  <p>
                    Where relevant, information may be cross-checked using
                    publicly available official sources such as:
                  </p>

                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      <a
                        href="https://u.ae/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-700 underline"
                      >
                        UAE Government Portal
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.rta.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-700 underline"
                      >
                        Dubai RTA
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.mohre.gov.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-700 underline"
                      >
                        MOHRE
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">
            Editorial Contact
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            If you notice outdated information, factual issues, or want to
            suggest improvements to published content, you can contact the
            editorial support team below.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Genuine feedback and correction requests are reviewed carefully to
            improve content quality and reader trust.
          </p>

          <div className="mt-6 rounded-xl bg-slate-800 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
              Editorial Email
            </p>

            <p className="mt-2 text-xl font-black text-white">
              support@dubaitrendings.com
            </p>
          </div>
        </article>
      </section>

    </main>
  );
}