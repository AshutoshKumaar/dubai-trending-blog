import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogImageGallery from "@/components/BlogImageGallery";
import { getPostBySlug, posts } from "@/content/posts";
import { getArticleExtras } from "@/content/articleExtras";
import { buildContentDepth } from "@/content/contentDepth";

function RichText({ children, className = "" }) {
  return (
    <span
      className={`[&_a]:font-bold [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-900 ${className}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

function RichParagraph({ children, className = "" }) {
  return (
    <p
      className={`[&_a]:font-bold [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-900 ${className}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

function SectionBody({ section }) {
  const paragraphs = section.paragraphs || [];

  return (
    <div className="mt-3 space-y-3 text-base leading-7 text-slate-700">
      {section.callout ? (
        <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-950">
          <RichText>{section.callout}</RichText>
        </div>
      ) : null}

      {section.steps ? (
        <ol className="space-y-3">
          {section.steps.map((step, stepIndex) => (
            <li key={`${step.title}-${stepIndex}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Step {stepIndex + 1}</p>
              <h3 className="mt-1 text-lg font-extrabold text-slate-900">
                <RichText>{step.title}</RichText>
              </h3>
              <RichParagraph className="mt-2 text-sm leading-6">{step.detail}</RichParagraph>
            </li>
          ))}
        </ol>
      ) : null}

      {paragraphs.map((paragraph) => (
        <RichParagraph key={paragraph}>{paragraph}</RichParagraph>
      ))}

      {section.items ? (
        <ul className="space-y-2 rounded-xl bg-slate-50 p-4">
          {section.items.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <RichText>{item}</RichText>
            </li>
          ))}
        </ul>
      ) : null}

      {section.table ? (
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-100 text-left text-slate-900">
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} className="px-3 py-2 font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-slate-200">
                  {row.map((cell, cellIndex) => (
                    <td key={`${rowIndex}-${cellIndex}`} className="px-3 py-2 align-top">
                      <RichText>{cell}</RichText>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

function deepenStepDetail(step, post, index) {
  return `${step.detail} For ${post.category.toLowerCase()} readers, treat this as a working checkpoint: write the exact cost, deadline, document, contact person, and backup option before moving ahead. If the answer is unclear, pause here rather than trying to fix the mistake later. This checkpoint matters most at position ${index + 1}, because the next decision depends on it.`;
}

function ArticleSupportBlock({ post, extras, depth, currentIndex }) {
  const variant = currentIndex % 5;
  const supportSteps = extras.steps.slice(0, 4);
  const highlights = extras.highlights.slice(0, 4);
  const depthSections = depth.sections.slice(0, 4);

  if (variant === 0) {
    return (
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-extrabold">Deep Action Plan</h3>
        <div className="mt-5 space-y-6">
          {supportSteps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Action {index + 1}</p>
              <h4 className="mt-1 text-xl font-extrabold">{step.title}</h4>
              <RichParagraph className="mt-2 text-sm leading-6 text-slate-700">
                {deepenStepDetail(step, post, index)}
              </RichParagraph>
              <div className="relative mt-4 h-56 overflow-hidden rounded-xl border border-slate-200 sm:h-72">
                <Image src={step.image} alt={`${step.title} illustration`} fill className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (variant === 1) {
    return (
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-extrabold">Decision Checklist</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Check {index + 1}</p>
              <RichParagraph className="mt-2 text-sm leading-6 text-slate-700">
                {`${item} Before acting, connect this point to your own budget, timing, documents, and risk level. A checklist only works when every item has a clear yes, no, or follow-up note.`}
              </RichParagraph>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === 2) {
    return (
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-extrabold">Verification Guide</h3>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-100 text-left">
              <tr>
                <th className="px-3 py-2 font-bold">What to verify</th>
                <th className="px-3 py-2 font-bold">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {depthSections.map((section) => (
                <tr key={section.title} className="border-t border-slate-200">
                  <td className="px-3 py-2 align-top font-semibold text-slate-900">{section.title}</td>
                  <td className="px-3 py-2 align-top text-slate-700">
                    <RichText>{section.paragraphs[0]}</RichText>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (variant === 3) {
    return (
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-extrabold">Reader Situation Notes</h3>
        <div className="mt-5 space-y-4">
          {depthSections.map((section) => (
            <article key={section.title} className="border-l-4 border-blue-500 bg-blue-50 p-4">
              <h4 className="text-lg font-extrabold text-blue-950">{section.title}</h4>
              <RichParagraph className="mt-2 text-sm leading-6 text-blue-950">
                {section.paragraphs.join(" ")}
              </RichParagraph>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-extrabold">Planning Matrix</h3>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="px-3 py-2 font-bold">Planning point</th>
              <th className="px-3 py-2 font-bold">How to use it</th>
            </tr>
          </thead>
          <tbody>
            {supportSteps.map((step, index) => (
              <tr key={step.title} className="border-t border-slate-200">
                <td className="px-3 py-2 align-top font-semibold text-slate-900">{step.title}</td>
                <td className="px-3 py-2 align-top text-slate-700">
                  <RichText>{deepenStepDetail(step, post, index)}</RichText>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const extras = getArticleExtras(slug);
  const depth = buildContentDepth(post, extras);
  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const previousPost = posts[currentIndex - 1] ?? null;
  const nextPost = posts[currentIndex + 1] ?? null;
  const galleryImages = Array.from(
    new Set([post.image, ...extras.midImages, ...extras.steps.map((step) => step.image)])
  ).slice(0, 6);
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://dubaitrendings.com${post.image}`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Dubai Trending Blog",
      url: "https://dubaitrendings.com",
    },
    mainEntityOfPage: `https://dubaitrendings.com/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <article className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/blog"
              className="inline-flex h-10 items-center rounded-xl border border-blue-200 bg-blue-50 px-4 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow"
            >
              &larr; Back to all blogs
            </Link>
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="inline-flex h-10 items-center rounded-xl border border-blue-200 bg-blue-50 px-4 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow"
              >
                Next blog &rarr;
              </Link>
            ) : (
              <span className="inline-flex h-10 items-center rounded-xl border border-slate-200 bg-slate-100 px-4 text-sm font-semibold text-slate-400">
                Next blog &rarr;
              </span>
            )}
          </div>
        </section>

        <BlogImageGallery
          images={galleryImages}
          title={post.title}
          overlay={{
            category: post.category,
            title: post.title,
            date: post.date,
            readTime: post.readTime,
            author: post.author,
          }}
        />

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold">Article Overview</h2>
          <div className="mt-3 space-y-3 text-slate-700">
            {extras.intro.map((line) => (
              <RichParagraph key={line}>{line}</RichParagraph>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-slate-100 p-4">
            <p className="text-sm font-bold uppercase tracking-wide text-slate-600">Key Highlights</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {extras.highlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold">Editorial Note</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            This guide is written by {post.author} for Dubai Trending readers and is
            reviewed for clarity, practical usefulness, and source awareness before publication.
            Time-sensitive details should still be confirmed with official UAE channels.
          </p>
          <p className="mt-3 text-sm font-semibold text-slate-600">
            Last reviewed: {depth.updated} | Intended readers: {depth.audience}
          </p>
        </section>

        <div className="mt-8 space-y-8">
          {post.sections.map((section, index) => (
            <section key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold">{section.heading}</h2>
              <SectionBody section={section} />

              {extras.midImages[index] ? (
                <div className="relative mt-5 h-60 overflow-hidden rounded-2xl border border-slate-200 sm:h-80">
                  <Image
                    src={extras.midImages[index]}
                    alt={`${section.heading} visual explanation`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black">Detailed Practical Guide</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            The sections below add the extra context, checks, and reader-focused
            detail needed to make this guide useful beyond a quick summary.
          </p>
          <div className="mt-6 space-y-7">
            {depth.sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-2xl font-extrabold">{section.title}</h3>
                <div className="mt-3 space-y-3 text-base leading-7 text-slate-700">
                  {section.paragraphs.map((paragraph) => (
                    <RichParagraph key={paragraph}>{paragraph}</RichParagraph>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {extras.budgetRows.length > 0 ? (
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold">Suggested Budget Split</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-slate-100 text-left">
                  <tr>
                    <th className="px-3 py-2 font-bold">Category</th>
                    <th className="px-3 py-2 font-bold">Share</th>
                    <th className="px-3 py-2 font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {extras.budgetRows.map((row) => (
                    <tr key={row.category} className="border-t border-slate-200">
                      <td className="px-3 py-2">{row.category}</td>
                      <td className="px-3 py-2 font-semibold text-blue-700">{row.share}</td>
                      <td className="px-3 py-2 text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        <ArticleSupportBlock
          post={post}
          extras={extras}
          depth={depth}
          currentIndex={currentIndex}
        />

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
          <h3 className="text-xl font-extrabold">Final Takeaway</h3>
          <p className="mt-2 text-slate-200">
            Build decisions around verified information, weekly tracking, and consistent planning. Small improvements compound fast in Dubai&apos;s dynamic environment.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-extrabold">Frequently Asked Questions</h3>
          <div className="mt-5 space-y-5">
            {depth.faqs.map((item) => (
              <article key={item.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="text-lg font-extrabold">{item.question}</h4>
                <RichParagraph className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</RichParagraph>
              </article>
            ))}
          </div>
        </section>

        <nav className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Previous</p>
            {previousPost ? (
              <Link href={`/blog/${previousPost.slug}`} className="mt-2 block">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-2 transition hover:border-blue-300 hover:bg-slate-50">
                  <div className="relative h-14 w-20 overflow-hidden rounded-lg">
                    <Image src={previousPost.image} alt={previousPost.title} fill className="object-cover" />
                  </div>
                  <p className="line-clamp-2 font-semibold text-slate-900 transition hover:text-blue-700">
                    {previousPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <p className="mt-2 text-sm text-slate-500">No previous article</p>
            )}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Next</p>
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="mt-2 block">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-2 transition hover:border-blue-300 hover:bg-slate-50">
                  <div className="relative h-14 w-20 overflow-hidden rounded-lg">
                    <Image src={nextPost.image} alt={nextPost.title} fill className="object-cover" />
                  </div>
                  <p className="line-clamp-2 font-semibold text-slate-900 transition hover:text-blue-700">
                    {nextPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <p className="mt-2 text-sm text-slate-500">No next article</p>
            )}
          </div>
        </nav>
      </article>
    </main>
  );
}

