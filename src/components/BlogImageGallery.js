"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export default function BlogImageGallery({
  images = [],
  title = "Blog image",
  overlay = null,
}) {
  const safeImages = useMemo(
    () => (images.length ? images : ["/next.svg"]),
    [images]
  );
  const [activeImage, setActiveImage] = useState(safeImages[0]);
  const activeIndex = safeImages.indexOf(activeImage);

  useEffect(() => {
    if (safeImages.length < 2) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveImage((current) => {
        const currentIndex = safeImages.indexOf(current);
        const nextIndex =
          currentIndex === safeImages.length - 1 ? 0 : currentIndex + 1;
        return safeImages[nextIndex];
      });
    }, 2500);

    return () => clearInterval(timer);
  }, [safeImages]);

  return (
    <section className="mt-6">
      <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-slate-200 sm:h-[420px]">
        <Image src={activeImage} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
        <div className="absolute inset-0 shadow-[inset_0_-120px_140px_rgba(0,0,0,0.75)]" />
        {overlay ? (
          <div className="absolute bottom-0 w-full p-4 text-white sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-cyan-200">
              {overlay.category}
            </p>
            <h1 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">
              {overlay.title}
            </h1>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-white/15 px-3 py-1 text-slate-100">
                {overlay.date}
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-slate-100">
                {overlay.readTime}
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-slate-100">
                By {overlay.author}
              </span>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {safeImages.slice(0, 6).map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            className={`relative h-20 overflow-hidden rounded-xl border transition sm:h-24 ${
              activeIndex === safeImages.indexOf(image)
                ? "border-blue-500 ring-2 ring-blue-300/50"
                : "border-slate-200 hover:border-slate-400"
            }`}
            aria-label="Select article image"
          >
            <Image src={image} alt={`${title} thumbnail`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}
