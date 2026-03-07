export const metadata = {
  title: "Terms of Use",
  description:
    "Read the terms of use for Dubai Trending, including content use, reader responsibilities, and website access conditions.",
};

const termsSections = [
  {
    title: "General Use of the Website",
    text:
      "Dubai Trending is provided as an informational website for readers looking for Dubai-related news, guides, lifestyle coverage, jobs, travel, and business content. By using the site, visitors agree to use the content responsibly and in accordance with applicable law.",
  },
  {
    title: "Informational Nature of Content",
    text:
      "Content published on the website is intended for general informational and editorial purposes. It should not be interpreted as legal, immigration, employment, financial, or government-authorized advice unless explicitly stated.",
  },
  {
    title: "Reader Responsibility",
    text:
      "Readers are responsible for verifying time-sensitive or official information with authorized institutions, government platforms, or regulated service providers where necessary.",
  },
  {
    title: "Content Use and Restrictions",
    text:
      "Reproduction, bulk copying, automated scraping, republishing, or misuse of published material without permission is not permitted. Limited fair reference may be acceptable where properly attributed and lawful.",
  },
  {
    title: "Third-Party Links and Services",
    text:
      "The website may reference third-party sources, tools, services, or advertisements. Dubai Trending is not responsible for the policies, accuracy, or operations of external platforms linked from the site.",
  },
  {
    title: "Changes to Website Content",
    text:
      "Website content, structure, and published materials may be updated, edited, expanded, or removed at any time in order to maintain relevance, accuracy, and operational quality.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Terms of Use
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Terms and conditions for using Dubai Trending
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            These terms explain the general conditions under which visitors may
            access, read, and interact with Dubai Trending. The purpose of this
            page is to clarify reader responsibilities, acceptable use of the
            site, and the informational nature of the content published across the
            platform.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {termsSections.map((section) => (
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
          <h2 className="text-2xl font-black">Questions About These Terms</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            If clarification is needed regarding content usage, attribution,
            published material, or reader obligations, the support team can be
            contacted through the website contact page and support email channel.
          </p>
        </article>
      </section>
    </main>
  );
}
