export const metadata = {
  title: "Terms of Use",
  description:
    "Understand the terms and conditions for using Dubai Trending, including content usage, reader responsibility, and website policies.",
};

const termsSections = [
  {
    title: "Use of Website",
    text:
      "Dubai Trending is an informational platform created to provide practical Dubai-related guides and content. By accessing this website, users agree to use the platform responsibly and in accordance with applicable laws and regulations.",
  },
  {
    title: "Informational Purpose Only",
    text:
      "Content published on Dubai Trending is intended for general informational and educational purposes only. Articles should not be interpreted as legal, immigration, financial, employment, or official government advice.",
  },
  {
    title: "User Responsibility",
    text:
      "Readers are responsible for verifying important or time-sensitive information through official UAE authorities or qualified professionals before making major decisions related to visas, jobs, business setup, or financial matters.",
  },
  {
    title: "Content Usage and Restrictions",
    text:
      "All original content published on Dubai Trending is protected by intellectual property rights. Republishing, copying, scraping, or redistributing large portions of content without permission is not allowed, except for lawful fair use with proper attribution.",
  },
  {
    title: "External Links and References",
    text:
      "Some articles may contain links to government portals, third-party tools, or external websites for additional context and reference. Dubai Trending is not responsible for the accuracy, policies, or practices of external platforms.",
  },
  {
    title: "Website Updates and Changes",
    text:
      "Website content, structure, and policies may be updated, modified, or removed at any time in order to maintain relevance, improve quality, and reflect updated information.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Terms of Use
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Terms and Conditions for Using Dubai Trending
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            These terms explain how the Dubai Trending website may be used and
            what readers should understand before relying on information published
            across the platform.
          </p>

          <p className="mt-3 max-w-4xl text-base leading-8 text-slate-700">
            By accessing this website, you agree to use the content responsibly
            and accept the conditions described on this page.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Managed by Abdul Karim • Dubai Practical Content
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {termsSections.map((section) => (
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

              {section.title === "External Links and References" && (
                <div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-slate-700">
                  <p>
                    Official references used across the website may include:
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

      {/* FINAL CONTACT */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">
            Questions or Clarifications
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            If you have questions regarding content usage, attribution,
            policies, or website terms, you can contact the support team
            using the details below.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            All genuine requests are reviewed carefully to maintain clarity,
            transparency, and reader trust.
          </p>

          <div className="mt-6 rounded-xl bg-slate-800 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
              Support Email
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