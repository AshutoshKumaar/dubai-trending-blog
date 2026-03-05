import Link from "next/link";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    bgClass: "bg-blue-600",
    icon: "f",
  },
  {
    label: "X",
    href: "https://x.com",
    bgClass: "bg-black",
    icon: "x",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    bgClass: "bg-blue-700",
    icon: "in",
  },
  {
    label: "Copy Link",
    href: "/",
    bgClass: "bg-slate-700",
    icon: "cp",
  },
];

export default function SocialSidebar() {
  return (
    <aside className="fixed left-2 top-1/2 z-30 -translate-y-1/2">
      <div className="overflow-hidden rounded-r-xl bg-transparent">
        {socialLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className={`flex h-16 w-14 items-center justify-center text-xl font-bold text-white transition hover:brightness-110 ${item.bgClass}`}
          >
            {item.icon}
          </Link>
        ))}
        <button
          type="button"
          aria-label="More social options"
          className="flex h-14 w-14 items-center justify-center bg-slate-200 text-3xl text-slate-700 backdrop-blur transition hover:bg-white/70"
        >
          +
        </button>
      </div>
    </aside>
  );
}

