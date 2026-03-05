export const metadata = {
  title: "Terms of Use",
  description: "Demo terms of use for Dubai Trending Blog.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Legal</p>
        <h1 className="mt-2 text-4xl font-black">Terms of Use (Demo)</h1>
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-slate-700">
          <p>Content is for informational purposes and should not be treated as legal or financial advice.</p>
          <p>Users are responsible for verifying official updates from government or authorized institutions.</p>
          <p>Unauthorized scraping, republishing, or misuse of content is not allowed.</p>
        </div>
      </section>
    </main>
  );
}
