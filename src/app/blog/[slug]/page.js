import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogImageGallery from "@/components/BlogImageGallery";
import { getPostBySlug, posts } from "@/content/posts";
import { getArticleExtras } from "@/content/articleExtras";

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
  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const previousPost = posts[currentIndex - 1] ?? null;
  const nextPost = posts[currentIndex + 1] ?? null;
  const galleryImages = Array.from(
    new Set([post.image, ...extras.midImages, ...extras.steps.map((step) => step.image)])
  ).slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
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
              <p key={line}>{line}</p>
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

        <div className="mt-8 space-y-8">
          {post.sections.map((section, index) => (
            <section key={section.heading} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-base leading-7 text-slate-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

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

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-extrabold">Step-by-Step Action Plan</h3>
          <div className="mt-5 space-y-6">
            {extras.steps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-red-600">Step {index + 1}</p>
                <h4 className="mt-1 text-xl font-extrabold">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">{step.detail}</p>
                <div className="relative mt-4 h-56 overflow-hidden rounded-xl border border-slate-200 sm:h-72">
                  <Image src={step.image} alt={`${step.title} illustration`} fill className="object-cover" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
          <h3 className="text-xl font-extrabold">Final Takeaway</h3>
          <p className="mt-2 text-slate-200">
            Build decisions around verified information, weekly tracking, and consistent planning. Small improvements compound fast in Dubai&apos;s dynamic environment.
          </p>
        </div>

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





