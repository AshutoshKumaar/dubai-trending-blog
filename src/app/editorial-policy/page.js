export const metadata = {
  title: "Editorial Policy",
  description:
    "Read the editorial policy for Dubai Trending, including publishing approach, review standards, updates, and corrections.",
};

const editorialSections = [
  {
    title: "Reader-First Editorial Standard",
    text:
      "Dubai Trending publishes content with a reader-first approach, prioritizing usefulness, readability, and practical clarity over filler, clickbait, or misleading formatting.",
  },
  {
    title: "Topic Selection",
    text:
      "Articles are chosen based on relevance to Dubai-focused readers, including news developments, practical guides, lifestyle topics, jobs, travel information, and business-related interests.",
  },
  {
    title: "Writing and Review Process",
    text:
      "Content is reviewed for clarity, structure, and general usefulness before publication. Pages are written in a style intended to be accessible to general readers rather than overly technical or promotional.",
  },
  {
    title: "Updates and Revisions",
    text:
      "Published articles may be revised when factual context changes, additional clarity is needed, or new information becomes available. This helps maintain site relevance over time.",
  },
  {
    title: "Corrections Policy",
    text:
      "When a factual issue is identified, the page may be corrected or updated as appropriate. Editorial revisions are made to improve reliability and reduce confusion for readers.",
  },
  {
    title: "Advertising and Editorial Independence",
    text:
      "Advertising or sponsored placements should not override editorial usefulness. The site is intended to preserve a clear separation between informational content and advertising blocks.",
  },
];

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Editorial Policy
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            How Dubai Trending approaches publishing, updates, and reader trust
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            This editorial policy explains the publishing standards used by Dubai
            Trending. It is intended to show how content is selected, written,
            reviewed, and updated so readers can better understand the site’s
            editorial direction and trust framework.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {editorialSections.map((section) => (
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
          <h2 className="text-2xl font-black">Editorial Contact</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            For editorial concerns, content feedback, or correction-related
            communication, the support channel listed on the contact page can be
            used to submit a request for review.
          </p>
        </article>
      </section>
    </main>
  );
}
