export const metadata = {
  title: "About Us",
  description:
    "Learn about Dubai Trending, an independent Dubai-focused publisher covering news, guides, lifestyle, jobs, travel, and business.",
};

const coverageAreas = [
  "Dubai practical news and city updates",
  "Resident and expat-focused practical guides",
  "Lifestyle and local trend coverage",
  "Jobs, career, and work-related information",
  "Travel insights for visitors and planners",
  "Local business and service-related explainers",
];

const trustPoints = [
  "Independent digital publisher founded by AK Abdul Karim",
  "Weekly publishing schedule focused on accuracy and clarity",
  "Reader-first editorial approach with clear and practical writing",
  "Transparent informational pages including contact, privacy, and editorial policy",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            About Dubai Trending
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            A professional Dubai-focused blog for readers who need clear,
            current, and practical information
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700">
            Dubai Trending is an independent content platform created to cover
            trending topics and useful information related to Dubai. The website
            is built for residents, tourists, expats, job seekers, and business
            owners who want content that is informative, readable, and relevant
            to real-life decisions.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
            The editorial direction focuses on practical Dubai topics that
            readers search for regularly, including jobs, documents, transport,
            neighborhoods, city services, and selected lifestyle updates. The
            aim is to publish useful articles that remain readable and relevant
            after the first visit.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">What Dubai Trending Covers</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {coverageAreas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Publishing Style</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            The site uses a friendly tone while maintaining a professional page
            structure. Content is published on a weekly schedule and is written
            to remain accessible for readers who want fast understanding without
            sacrificing clarity.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Weekly updates
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Friendly tone
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Independent publisher
            </span>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <article className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Why Readers and Advertisers Can Trust This Site</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-4 text-sm leading-6 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-300">
            Dubai Trending is structured as an independent blog with clear
            navigation, dedicated informational pages, and original articles
            designed to help readers understand common Dubai topics in a more
            practical way.
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">Editorial Contact</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
            For editorial questions, corrections, feedback, or partnership
            inquiries related to site content, readers can contact the Dubai
            Trending support desk using the email below.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-5">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
              Support Email
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
