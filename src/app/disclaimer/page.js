export const metadata = {
  title: "Disclaimer",
  description: "Demo disclaimer for Dubai Trending Blog.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Legal</p>
        <h1 className="mt-2 text-4xl font-black">Disclaimer (Demo)</h1>
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-slate-700">
          <p>Information may change based on regulation updates. Always cross-check with official sources.</p>
          <p>We are not affiliated with government entities unless explicitly stated.</p>
        </div>
      </section>
    </main>
  );
}
