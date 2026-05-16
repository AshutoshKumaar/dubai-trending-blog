export const metadata = {
  title: "Contact",
  description:
    "Contact Dubai Trending for support, editorial feedback, corrections, or business inquiries related to Dubai-focused content and guides.",
};

const contactCards = [
  {
    title: "Editorial Support",
    text:
      "If you notice outdated information, factual errors, or want to suggest improvements to published articles, you can contact the editorial team here. Genuine correction requests are reviewed carefully.",
  },
  {
    title: "Business & Partnerships",
    text:
      "For advertising discussions, partnerships, collaborations, or business-related communication connected to Dubai Trending, use this contact channel.",
  },
  {
    title: "General Reader Assistance",
    text:
      "If you have questions related to website navigation, article topics, or general guidance about the content available on the site, support is available to help direct your request.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Contact Dubai Trending
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Get in Touch for Support, Feedback, or Business Inquiries
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            Dubai Trending is focused on publishing practical and easy-to-understand
            Dubai-related content. If you have feedback, questions, or require
            assistance related to published guides, you can contact the support
            team using the information below.
          </p>

          <p className="mt-3 max-w-4xl text-base leading-8 text-slate-700">
            Messages are reviewed regularly and directed to the appropriate
            channel depending on the nature of the request.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Managed by Abdul Karim • UAE Content & Research
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* CONTACT TYPES */}
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-10 sm:px-6 md:grid-cols-3">
        {contactCards.map((card) => (
          <article
            key={card.title}
            className="rounded-3xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-black">
              {card.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              {card.text}
            </p>
          </article>
        ))}
      </section>

      {/* EMAIL SECTION */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <article className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">
            Primary Contact Email
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            For most communication, including editorial concerns, business
            inquiries, partnership requests, or general support, please use
            the contact email below.
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

      {/* RESPONSE INFO */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">
            Response Expectations
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            Most messages are reviewed within 24–48 hours depending on request
            volume. Editorial corrections and important support-related queries
            are prioritized whenever possible.
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            To help speed up the review process, include a clear subject line
            and enough detail in your message so the request can be understood
            quickly.
          </p>

          <div className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-slate-700">
            <p>
              For official UAE-related procedures or legal matters, readers
              should always confirm information through official government
              platforms where necessary.
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
        </article>
      </section>

    </main>
  );
}