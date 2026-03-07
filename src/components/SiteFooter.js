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

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.3 1.3-1.3h1.5V5.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v1.8H8.5V14h2.2v7h2.8Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M18.9 3H21l-4.6 5.2L21.8 21h-4.2l-3.3-4.4L10.4 21H8.2l4.9-5.6L2.8 3H7l3 4 3.6-4Zm-1.5 15.4h1.2L6.3 5.5H5.1l12.3 12.9Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M6.9 8.5H3.8V20h3.1V8.5ZM5.4 3.9A1.8 1.8 0 1 0 5.4 7.5a1.8 1.8 0 0 0 0-3.6ZM20.2 13c0-3-1.6-4.8-4.3-4.8-1.6 0-2.5.9-2.9 1.5v-1.2h-3V20h3V14c0-1.6.3-3.1 2.3-3.1s2 1.9 2 3.2v5.9h3V13Z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M3 5h18v14H3V5Zm2 2v.2l7 5.3 7-5.3V7H5Zm14 10V9.7l-7 5.3-7-5.3V17h14Z" />
      </svg>
    ),
  },
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
          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-amber-300 hover:text-white"
              >
                {item.icon}
              </Link>
            ))}
          </div>
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
          <p>Built with a reader-first publishing structure and clear navigation.</p>
        </div>
      </div>
    </footer>
  );
}
