export const metadata = {
  title: "Contact",
  description:
    "Contact Dubai Trending for support, feedback, corrections, or business inquiries related to Dubai guides and content.",
};

const contactCards = [
  {
    title: "Editorial Support",
    text:
      "If you notice incorrect information or want to suggest improvements in any article, you can reach out here. Every message is reviewed to keep content accurate and useful.",
  },
  {
    title: "Business & Partnerships",
    text:
      "For collaborations, advertising discussions, or partnership opportunities related to Dubai-focused content, use this contact channel.",
  },
  {
    title: "General Help",
    text:
      "If you're unsure where to start or have questions about guides, navigation, or topics covered on the site, you can contact support for assistance.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase text-amber-600">
            Contact Dubai Trending
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Get in Touch for Support, Feedback, or Business Queries
          </h1>

          <p className="mt-5 text-base text-slate-700 leading-8">
            Dubai Trending is designed to provide practical and reliable information.
            If you have questions, feedback, or need help understanding any topic,
            you can reach out using the contact details below.
          </p>

          <p className="mt-3 text-base text-slate-700">
            Messages are reviewed regularly and routed based on the type of request.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Managed by Abdul Karim • UAE Content & Research
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
            <h2 className="text-xl font-black">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{card.text}</p>
          </article>
        ))}
      </section>

      {/* EMAIL */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <article className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Primary Contact Email</h2>

          <p className="mt-4 text-sm text-slate-300 leading-7">
            For most requests, you can use the email below. Messages are handled
            based on topic — including editorial corrections, feedback, or
            partnership inquiries.
          </p>

          <div className="mt-6 rounded-xl bg-slate-800 p-5">
            <p className="text-xs uppercase text-amber-300 font-bold">Email</p>
            <p className="mt-2 text-xl font-black">
              support@dubaitrendings.com
            </p>
          </div>
        </article>
      </section>

      {/* RESPONSE INFO */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Response Time</h2>

          <p className="mt-4 text-sm text-slate-700 leading-7">
            Most messages are reviewed within 24–48 hours. Priority is given to
            content corrections and important support queries.
          </p>

          <p className="mt-3 text-sm text-slate-700">
            For faster response, include a clear subject line and explain your
            request in detail.
          </p>
        </article>
      </section>

    </main>
  );
}