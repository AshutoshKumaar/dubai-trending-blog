export const metadata = {
  title: "Terms of Use",
  description:
    "Understand the terms and conditions for using Dubai Trending, including content usage, reader responsibility, and website policies.",
};

const termsSections = [
  {
    title: "Use of Website",
    text:
      "Dubai Trending is an informational platform designed to provide practical content related to Dubai. By accessing this website, you agree to use it responsibly and in accordance with applicable laws.",
  },
  {
    title: "Informational Purpose Only",
    text:
      "All content on this website is intended for general informational use. It should not be considered legal, financial, immigration, employment, or official advice.",
  },
  {
    title: "User Responsibility",
    text:
      "Users are responsible for verifying any time-sensitive or important information through official UAE sources or qualified professionals before making decisions.",
  },
  {
    title: "Content Usage",
    text:
      "All content on Dubai Trending is the intellectual property of the website. Copying, republishing, scraping, or distributing content without permission is not allowed, except for limited fair use with proper attribution.",
  },
  {
    title: "External Links",
    text:
      "The website may include references to third-party platforms or services. Dubai Trending is not responsible for the content, policies, or reliability of any external site.",
  },
  {
    title: "Updates and Changes",
    text:
      "Content, structure, and policies on the website may be updated or changed at any time to maintain accuracy, relevance, and performance.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase text-amber-600">
            Terms of Use
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Terms and Conditions for Using Dubai Trending
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-700">
            These terms explain how the Dubai Trending website can be used and
            what users should understand before relying on the information provided.
          </p>

          <p className="mt-3 text-base text-slate-700">
            By using this website, you agree to follow these terms and use the
            content responsibly.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Managed by Abdul Karim • Dubai Practical Content
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
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CONTACT */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Questions or Clarifications</h2>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            If you have questions about content usage, policies, or terms,
            you can contact the support team through the contact page or
            email provided on the website.
          </p>

          <p className="mt-3 text-sm text-slate-300">
            All requests are reviewed to ensure clarity and proper guidance.
          </p>
        </article>
      </section>

    </main>
  );
}