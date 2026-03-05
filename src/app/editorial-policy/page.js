export const metadata = {
  title: "Editorial Policy",
  description: "Demo editorial standards for Dubai Trending Blog.",
};

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Policy</p>
        <h1 className="mt-2 text-4xl font-black">Editorial Policy (Demo)</h1>
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-slate-700">
          <p>Articles are drafted with reader-first intent and edited for clarity, accuracy, and practical usefulness.</p>
          <p>We update published posts when important facts, pricing, or regulations change.</p>
          <p>Corrections are made transparently when factual errors are identified.</p>
        </div>
      </section>
    </main>
  );
}
