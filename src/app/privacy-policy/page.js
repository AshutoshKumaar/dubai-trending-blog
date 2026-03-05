export const metadata = {
  title: "Privacy Policy",
  description: "Demo privacy policy for Dubai Trending Blog.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Legal</p>
        <h1 className="mt-2 text-4xl font-black">Privacy Policy (Demo)</h1>
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-slate-700">
          <p>We collect minimal analytics and contact details only when users voluntarily submit forms.</p>
          <p>We do not sell personal information. Data is used to improve content quality and user experience.</p>
          <p>For policy requests, users can contact support through the contact page.</p>
        </div>
      </section>
    </main>
  );
}
