import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All Blogs", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Editorial Policy", href: "/editorial-policy" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <section>
          <BrandLogo href="/" compact dark />
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Trusted Dubai and UAE blog for practical guides on jobs, city life,
            travel, documentation, and business.
          </p>
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {policyLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Dubai Trending. All rights reserved.</p>
          <p>Built with a reader-first, AdSense-friendly content structure.</p>
        </div>
      </div>
    </footer>
  );
}
