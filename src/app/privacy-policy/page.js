export const metadata = {
  title: "Privacy Policy",
  description:
    "Read how Dubai Trending collects, uses, and protects user data, including cookies, analytics, and advertising information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* HEADER */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase text-amber-600">
            Privacy Policy
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            How We Handle Your Data
          </h1>

          <p className="mt-5 text-base text-slate-700 leading-8">
            This Privacy Policy explains how Dubai Trending collects, uses,
            and protects information when you visit the website. The goal is
            to keep everything simple, transparent, and easy to understand.
          </p>

          <p className="mt-3 text-base text-slate-700">
            By using this site, you agree to the practices described below.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 space-y-6">

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-xl font-black">Information We Collect</h2>
          <p className="mt-3 text-sm text-slate-700 leading-7">
            We may collect basic information such as browser type, device
            information, pages visited, and general usage data. If you contact
            us directly, we may also receive your name and email address.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-xl font-black">How We Use Information</h2>
          <p className="mt-3 text-sm text-slate-700 leading-7">
            The information collected is used to improve website performance,
            understand user behavior, respond to messages, and provide better
            content based on user needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-xl font-black">Cookies and Analytics</h2>
          <p className="mt-3 text-sm text-slate-700 leading-7">
            This website may use cookies and analytics tools to understand how
            visitors interact with content. Cookies help improve user experience
            by remembering preferences and analyzing traffic trends.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-xl font-black">Advertising (Google AdSense)</h2>
          <p className="mt-3 text-sm text-slate-700 leading-7">
            Dubai Trending may display advertisements using Google AdSense.
            Google may use cookies or web beacons to show ads based on your
            visits to this and other websites.
          </p>

          <p className="mt-3 text-sm text-slate-700">
            Users can opt out of personalized advertising by visiting:
            https://www.google.com/settings/ads
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-xl font-black">Data Protection</h2>
          <p className="mt-3 text-sm text-slate-700 leading-7">
            We take reasonable steps to protect your data and do not collect
            unnecessary personal information. Data is only used for legitimate
            website operations and communication.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm">
          <h2 className="text-xl font-black">User Rights</h2>
          <p className="mt-3 text-sm text-slate-700 leading-7">
            You have the right to request information about your data or ask
            for removal of any personal information shared with us.
          </p>
        </div>

      </section>

      {/* CONTACT */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Contact</h2>

          <p className="mt-4 text-sm text-slate-700">
            For privacy-related questions or requests, contact us at:
          </p>

          <div className="mt-5 bg-amber-50 p-4 rounded-xl">
            <p className="font-bold">support@dubaitrendings.com</p>
          </div>
        </div>
      </section>

    </main>
  );
}