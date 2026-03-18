export default function sitemap() {
  const baseUrl = "https://dubaitrendings.com";

  const posts = [
    "dubai-cost-of-living-2026-guide",
    "best-areas-to-live-in-dubai",
    "uae-labour-law-private-employees",
    "dubai-weekend-itinerary-budget",
    "how-to-find-jobs-in-uae-fast",
    "emirates-id-renewal-process",
    "uae-traffic-fine-check-guide",
    "start-small-business-in-dubai",
    "dubai-metro-and-nol-card-tips",
    "dubai-digital-marketing-trends-2026",
    "dubai-visa-types-expats-2026",
    "golden-visa-uae-how-to-apply",
    "freelance-in-dubai-complete-guide",
    "dubai-rental-guide-2026",
    "health-insurance-uae-guide",
    "uae-banking-guide-expats",
    "school-guide-dubai-families",
    "uae-driving-license-guide",
    "uae-gratuity-end-of-service-calculator",
    "uae-work-permit-guide",
    "abu-dhabi-vs-dubai-living-guide",
    "dubai-food-guide-locals-expats",
    "remittance-sending-money-abroad-uae",
    "uae-tax-free-income-guide",
    "expat-life-dubai-realistic-guide",
  ];

  const blogUrls = posts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...blogUrls,
  ];
}