import { posts } from "@/content/posts";

export default function sitemap() {
  const baseUrl = "https://dubaitrendings.com";

  const corePages = [
    "",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/editorial-policy",
  ];

  const pageUrls = corePages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.6,
  }));

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pageUrls, ...blogUrls];
}
