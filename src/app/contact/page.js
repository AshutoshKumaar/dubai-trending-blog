export const metadata = {
  title: "Contact",
  description: "Contact Dubai Trending Blog for feedback, corrections, and business inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Contact</p>
        <h1 className="mt-2 text-4xl font-black">Contact Us</h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This is a demo contact page. You can replace these details with your official business email and support channels.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">Editorial</h2>
            <p className="mt-2 text-sm text-slate-700">editor@dubaitrendingblog.com</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold">Business</h2>
            <p className="mt-2 text-sm text-slate-700">partners@dubaitrendingblog.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
