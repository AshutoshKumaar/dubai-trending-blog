export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Dubai Trending, including information about data use, contact submissions, cookies, and user rights.",
};

const sections = [
  {
    title: "Information We May Collect",
    text:
      "Dubai Trending may collect limited information such as browser analytics, device-related usage data, and contact details submitted voluntarily through support communication.",
  },
  {
    title: "How Information Is Used",
    text:
      "Information is used to improve site performance, understand user interest, respond to support communication, and maintain content quality across the platform.",
  },
  {
    title: "Cookies and Basic Analytics",
    text:
      "The site may use cookies or analytics tools to understand traffic patterns, popular content areas, and general website usage trends.",
  },
  {
    title: "Third-Party Services",
    text:
      "Advertising, analytics, or embedded third-party tools may process limited technical data according to their own policies where applicable.",
  },
  {
    title: "Data Protection",
    text:
      "Reasonable efforts are made to keep collected information secure and to limit the use of personal data to legitimate operational or communication needs.",
  },
  {
    title: "User Requests",
    text:
      "Users may contact the website support address for privacy-related questions, communication preferences, or data-related requests.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Privacy and data-use overview for Dubai Trending
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">
            This privacy policy outlines how Dubai Trending may collect, use, and
            handle limited user information when visitors browse the site, view
            content, or contact the editorial support address. The aim is to keep
            privacy expectations clear and transparent for general readers,
            visitors, and advertisers.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
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

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <article className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Advertising and Publisher Transparency</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Dubai Trending is structured as an independent digital publisher and
            may use standard analytics or advertising tools where appropriate.
            Those services may process limited technical information such as
            cookies, anonymous usage signals, or browser-level identifiers
            according to their own policies.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The website does not aim to collect unnecessary personal information
            and does not represent government authority or official institutions
            unless explicitly stated.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Contact for Privacy Questions</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            If you have a question about this privacy policy or need to request
            clarification related to privacy and contact communication, use the
            support email below.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
              Privacy Contact
            </p>
            <p className="mt-2 text-lg font-bold text-slate-900">
              support@dubaitrending.com
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
