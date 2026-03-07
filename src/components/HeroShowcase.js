"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroShowcase({ posts }) {
  const slides = useMemo(() => posts.slice(0, 5), [posts]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activePost = slides[activeIndex];

  useEffect(() => {
    if (slides.length < 2) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 500);

    return () => clearInterval(timer);
  }, [slides.length]);

  function goPrev() {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function goNext() {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-md">
        <div className="relative h-[420px] w-full">
          <Image
            src={activePost.image}
            alt={activePost.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-4xl font-bold text-white backdrop-blur transition hover:bg-white/35"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-4xl font-bold text-white backdrop-blur transition hover:bg-white/35"
          >
            &#8250;
          </button>

          <div className="absolute bottom-0 w-full p-5 sm:p-7">
            <p className="inline-flex bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {activePost.category} / UAE Guide / Trending
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl">
              {activePost.title}
            </h1>
            <p className="mt-2 text-lg text-slate-100">
              {activePost.date} - by {activePost.author}
            </p>
            <Link
              href={`/blog/${activePost.slug}`}
              className="mt-4 inline-flex rounded-md bg-white px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-slate-200"
            >
              Open Full Article
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 bg-slate-100 p-3 sm:grid-cols-5">
          {slides.map((post, index) => (
            <button
              key={post.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative h-24 overflow-hidden rounded-md border transition sm:h-28 ${
                activeIndex === index
                  ? "border-red-500 ring-2 ring-red-500/30"
                  : "border-slate-300 hover:border-slate-400"
              }`}
            >
              <Image src={post.image} alt={post.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
