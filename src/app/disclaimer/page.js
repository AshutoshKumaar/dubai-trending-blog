export const metadata = {
  title: "Disclaimer",
  description:
    "Read the disclaimer for Dubai Trending, including content limitations, external references, and reader responsibilities.",
};

const disclaimerSections = [
  {
    title: "Independent Publisher",
    text:
      "Dubai Trending is an independent informational website and is not officially affiliated with any UAE government authority, immigration office, legal institution, or regulatory organization unless explicitly stated on a specific page.",
  },
  {
    title: "General Information Only",
    text:
      "All content published on this website is intended for general informational and educational purposes. Articles are created to simplify topics and improve understanding, but should not be treated as professional legal, financial, immigration, employment, or government advice.",
  },
  {
    title: "Verification of Information",
    text:
      "Although reasonable effort is made to keep information accurate and updated, regulations, pricing, procedures, and services in Dubai can change over time. Readers should verify important details through official UAE sources or qualified professionals before making decisions.",
  },
  {
    title: "Third-Party Services and Links",
    text:
      "The website may include references to third-party tools, services, external websites, or government portals for additional context and convenience. Dubai Trending does not control or guarantee the policies, accuracy, or reliability of external platforms.",
  },
  {
    title: "No Guaranteed Outcomes",
    text:
      "Information published on Dubai Trending is intended to support understanding and awareness. Individual outcomes related to jobs, visas, applications, business setup, or financial matters may vary depending on personal circumstances and official requirements.",
  },
  {
    title: "Content Updates",
    text:
      "Website content may be updated, edited, or revised at any time to improve clarity, maintain relevance, or reflect new information and policy changes.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Disclaimer
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Important Information About Using This Website
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            This page explains the scope and limitations of the information
            published on Dubai Trending. The purpose is to help readers clearly
            understand how website content should be used and interpreted.
          </p>

          <p className="mt-3 max-w-4xl text-base leading-8 text-slate-700">
            The website focuses on practical awareness and general understanding,
            not official or professional consultation.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Managed by Abdul Karim • Dubai Practical Guides
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* MAIN SECTIONS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {disclaimerSections.map((section) => (
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

              {section.title === "Third-Party Services and Links" && (
                <div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-slate-700">
                  <p>
                    Official references mentioned across the website may include:
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

      {/* FINAL GUIDANCE */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">
            Reader Responsibility
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Before making decisions related to employment, visas, legal matters,
            business registration, or financial commitments, readers should
            consult official UAE authorities or qualified professionals where necessary.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Dubai Trending is designed to support awareness and understanding —
            not replace professional consultation or official guidance.
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