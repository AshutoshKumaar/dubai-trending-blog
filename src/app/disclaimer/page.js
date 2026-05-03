export const metadata = {
  title: "Disclaimer",
  description:
    "Read the disclaimer for Dubai Trending, including content limitations, external references, and user responsibility.",
};

const disclaimerSections = [
  {
    title: "Independent Publisher (No Official Affiliation)",
    text:
      "Dubai Trending is an independent informational blog. It is not affiliated with any UAE government authority, immigration department, legal body, or official organization unless clearly stated on a specific page.",
  },
  {
    title: "Content Is for General Information Only",
    text:
      "The content on this website is created to simplify complex topics and provide general understanding. It should not be considered legal, financial, employment, or immigration advice.",
  },
  {
    title: "Verify Important Information",
    text:
      "While every effort is made to keep content accurate and up to date, policies, procedures, and costs in Dubai can change. Readers should always verify important details from official sources before making decisions.",
  },
  {
    title: "Third-Party Services and Links",
    text:
      "The website may mention or reference third-party services, tools, or external platforms for informational purposes. Dubai Trending does not control or guarantee the accuracy, reliability, or outcomes of any third-party service.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase text-amber-600">
            Disclaimer
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Important Information About This Website
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-700">
            This page explains the scope and limitations of the information
            published on Dubai Trending. The goal is to keep expectations clear
            so readers understand how to use the content responsibly.
          </p>

          <p className="mt-3 text-base text-slate-700">
            All content is written for general awareness and practical
            understanding — not as official or professional advice.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Managed by Abdul Karim • Dubai Practical Guides
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
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL GUIDANCE */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Reader Responsibility</h2>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Before making decisions related to jobs, visas, legal matters,
            business setup, or financial commitments, readers should consult
            official UAE sources or licensed professionals.
          </p>

          <p className="mt-3 text-sm text-slate-300">
            Dubai Trending is designed to support understanding and awareness —
            not replace professional advice or official guidance.
          </p>
        </article>
      </section>

    </main>
  );
}