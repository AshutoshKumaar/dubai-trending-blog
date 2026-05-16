export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Dubai Trending collects, uses, and protects visitor information, including cookies, analytics, and advertising data.",
};

const privacySections = [
  {
    title: "Information We Collect",
    text:
      "Dubai Trending may collect basic information such as browser type, device information, pages visited, referral source, and general usage data. If you contact us directly or subscribe to updates, we may also receive your name and email address.",
  },
  {
    title: "How Information Is Used",
    text:
      "The information collected is used to improve website performance, understand which content is most useful to readers, respond to messages, and maintain overall website functionality and security.",
  },
  {
    title: "Cookies and Analytics",
    text:
      "This website may use cookies and analytics tools to understand visitor behavior and improve user experience. Cookies help remember preferences and provide insights into how readers interact with the website.",
  },
  {
    title: "Google AdSense and Advertising",
    text:
      "Dubai Trending may display advertisements through Google AdSense and other advertising partners. These services may use cookies or web beacons to show personalized advertisements based on your browsing activity and visits to this or other websites.",
  },
  {
    title: "Third-Party Links",
    text:
      "Articles on this website may include links to official UAE government websites, transport authorities, news sources, or third-party services for additional reference. Dubai Trending is not responsible for the privacy practices or content of external websites.",
  },
  {
    title: "Data Protection",
    text:
      "Reasonable steps are taken to protect user information and maintain website security. Personal information is not sold or shared for unauthorized purposes.",
  },
  {
    title: "Your Rights",
    text:
      "Users may request information about personal data shared with this website or request removal of submitted information where applicable.",
  },
  {
    title: "Policy Updates",
    text:
      "This Privacy Policy may be updated periodically to reflect changes in website practices, advertising services, or legal requirements. Continued use of the website after updates indicates acceptance of the revised policy.",
  },
];

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
            How Dubai Trending Handles Visitor Information
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-700">
            This Privacy Policy explains how Dubai Trending collects, uses,
            and protects visitor information. The goal is to keep the process
            transparent and easy to understand for readers using the website.
          </p>

          <p className="mt-3 text-base text-slate-700">
            By using this website, you agree to the practices described in this policy.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Managed by Abdul Karim • Dubai Practical Guides
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {privacySections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-black">{section.title}</h2>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                {section.text}
              </p>

              {section.title === "Google AdSense and Advertising" && (
                <div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-slate-700">
                  <p>
                    Google may use advertising cookies to display relevant ads.
                    Users can manage ad personalization settings through Google Ads Settings.
                  </p>

                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-semibold text-blue-700 underline"
                  >
                    Visit Google Ads Settings
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-black">
            Privacy Questions or Requests
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            If you have questions about this Privacy Policy or need assistance
            regarding your information, you can contact the support team below.
          </p>

          <div className="mt-6 rounded-xl bg-slate-800 p-5">
            <p className="text-xs uppercase tracking-wide text-amber-300 font-bold">
              Support Email
            </p>

            <p className="mt-2 text-xl font-black">
              support@dubaitrendings.com
            </p>
          </div>
        </article>
      </section>

    </main>
  );
}