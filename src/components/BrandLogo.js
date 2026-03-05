import Link from "next/link";

export default function BrandLogo({ href = "/", compact = false, dark = false }) {
  const primary = dark ? "text-white" : "text-slate-900";
  const accent = dark ? "text-amber-300" : "text-amber-600";

  return (
    <Link href={href} className={`inline-flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      <span className={`inline-flex items-center justify-center ${compact ? "h-11 w-11" : "h-16 w-16"}`}>
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className={compact ? "h-8 w-8" : "h-12 w-12"}
        >
          <defs>
            <linearGradient id="burjBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="burjHighlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
          </defs>
          <path
            d="M29 4h6v8h3v7h-3v7h4v7h-4v8h5v7h-5v8h6v7H23v-7h6v-8h-5v-7h5v-8h-4v-7h4v-7h-3v-7h3z"
            fill="url(#burjBody)"
          />
          <path
            d="M32 6v54M28 26h8M27 40h10M26 54h12"
            stroke="#1f2937"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M32 4v56M30 18h4M29 32h6M28 46h8"
            stroke="url(#burjHighlight)"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.95"
          />
          <circle cx="32" cy="5.5" r="1.6" fill="#fef3c7" />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`${primary} font-black tracking-tight ${
            compact ? "text-2xl" : "text-[2rem]"
          }`}
        >
          Dubai
        </span>
        <span
          className={`${accent} mt-0.5 text-[0.7rem] font-bold uppercase tracking-[0.22em]`}
        >
          Trending
        </span>
      </span>
    </Link>
  );
}
