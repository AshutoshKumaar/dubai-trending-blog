export const metadata = {
  title: "About Us",
  description: "Learn about Dubai Trending Blog editorial mission and content standards.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">About</p>
        <h1 className="mt-2 text-4xl font-black">About Dubai Trending Blog</h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          Dubai Trending Blog is a reader-first platform focused on practical guides for living, working, traveling,
          and building a career or business in Dubai and the UAE.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold">Our Mission</h2>
          <p className="mt-3 text-slate-700">
            Publish clear, useful, and easy-to-apply articles that help readers make better day-to-day decisions.
          </p>
        </div>
      </section>
    </main>
  );
}
