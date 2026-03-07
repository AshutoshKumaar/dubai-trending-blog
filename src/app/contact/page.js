export const metadata = {
  title: "Contact",
  description:
    "Contact Dubai Trending for editorial questions, corrections, reader support, and business inquiries.",
};

const contactCards = [
  {
    title: "Editorial Support",
    text:
      "Use this channel for corrections, feedback on published articles, or reader-related editorial questions.",
  },
  {
    title: "Business and Partnerships",
    text:
      "Use this channel for sponsorship discussions, advertising communication, and general business inquiries.",
  },
  {
    title: "General Assistance",
    text:
      "For questions related to navigation, page issues, or contact routing, the support desk can help direct the request.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Contact Dubai Trending
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Contact the editorial and support team
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            Dubai Trending maintains a simple and professional contact structure
            so readers, partners, and businesses can reach the right channel
            quickly. For all general communication, editorial queries, and
            business contact requests, the support address below is the primary
            point of contact.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-10 sm:px-6 md:grid-cols-3">
        {contactCards.map((card) => (
          <article
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-black">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{card.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <article className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Primary Contact Address</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            For most requests, use the support mailbox below. Messages can be
            routed internally based on topic, including editorial support,
            feedback, content corrections, or brand communication.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800 px-5 py-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-300">
              Email
            </p>
            <p className="mt-2 text-xl font-black text-white">
              support@dubaitrending.com
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Response Expectations</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Dubai Trending aims to review incoming messages on a regular basis.
            Response times may vary depending on request volume, but genuine
            editorial corrections and support queries are prioritized wherever
            possible.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Please include a clear subject line and enough context in your email
            so the request can be reviewed efficiently.
          </p>
        </article>
      </section>
    </main>
  );
}
