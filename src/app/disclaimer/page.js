export const metadata = {
  title: "Disclaimer",
  description:
    "Read the disclaimer for Dubai Trending, including limitations on advice, official affiliations, and content reliance.",
};

const disclaimerSections = [
  {
    title: "No Official Affiliation",
    text:
      "Dubai Trending is an independent publisher and should not be interpreted as an official government, legal, immigration, employment, or regulatory authority unless explicitly stated on a specific page.",
  },
  {
    title: "No Professional Advice",
    text:
      "Content on this site does not replace legal advice, financial advice, employment counsel, visa consultation, or any other regulated professional service. Readers should seek qualified support for high-stakes decisions.",
  },
  {
    title: "Accuracy and Timeliness",
    text:
      "Reasonable effort is made to publish relevant and useful content, but regulations, service procedures, pricing, and operational details can change. Readers should verify critical information from official or authoritative sources.",
  },
  {
    title: "Third-Party References",
    text:
      "Links, references, tools, or mentions of third-party products and services are provided for general convenience and editorial context. Dubai Trending does not guarantee third-party accuracy, safety, or outcomes.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Disclaimer
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Important reading before relying on website content
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            This disclaimer is intended to clarify the purpose and limitations of
            the content published on Dubai Trending. The website is built to
            provide helpful editorial content and practical reference material,
            but readers should understand the boundaries of that role.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {disclaimerSections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Reader Guidance</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            Before making decisions related to employment, visa status, legal
            obligations, business setup, or financial commitments, readers should
            consult official sources or licensed professionals. Dubai Trending is
            intended to support understanding, not replace authorized advice.
          </p>
        </article>
      </section>
    </main>
  );
}
