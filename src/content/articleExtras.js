const defaultStepImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=80",
];

const costOfLivingGuide = {
  intro: [
    "Dubai offers high quality infrastructure and strong earning opportunities, but monthly spending can rise quickly without a budgeting system.",
    "This guide gives a practical step-by-step model so new residents can control rent, food, transport, and savings from the first month.",
  ],
  highlights: [
    "Set non-negotiable monthly limits before moving.",
    "Track spending categories weekly, not yearly.",
    "Build an emergency fund equal to 3 months of needs.",
    "Avoid high recurring app subscriptions in first 90 days.",
  ],
  midImages: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  ],
  steps: [
    {
      title: "Step 1: Fix Your Monthly Income Baseline",
      detail:
        "Start with after-tax take-home income and remove uncertain side income. Budget only on guaranteed monthly cash flow.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Step 2: Allocate Rent and Utilities First",
      detail:
        "Keep housing between 30 to 40 percent of income and include electricity, chiller, internet, and maintenance fees together.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Step 3: Lock Food and Transport Budgets",
      detail:
        "Set weekly caps for groceries, meal delivery, taxi rides, and fuel so daily overspending does not break your month.",
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Step 4: Build Safety Buffer and Savings",
      detail:
        "Automate savings transfer right after salary credit. Use a separate account so emergency funds are not accidentally spent.",
      image:
        "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Step 5: Review and Adjust Every 2 Weeks",
      detail:
        "Review category variance, cut unnecessary apps, and optimize commute strategy. Small edits every two weeks prevent major month-end shortfalls.",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  budgetRows: [
    { category: "Rent + Utilities", share: "35%", note: "Choose area by commute and office access" },
    { category: "Food + Groceries", share: "18%", note: "Meal planning saves strongly" },
    { category: "Transport", share: "12%", note: "Use metro + planned taxi usage" },
    { category: "Insurance + Health", share: "8%", note: "Set recurring monthly reserve" },
    { category: "Savings + Emergency", share: "20%", note: "Automatic transfer day one" },
    { category: "Leisure + Misc", share: "7%", note: "Keep this flexible but capped" },
  ],
  comments: [
    {
      name: "Ravi M.",
      text: "Very practical breakdown. The 2-week review tip saved my monthly budget.",
      rating: 5,
    },
    {
      name: "Aisha K.",
      text: "Please add a version for family of 3 too. Great article overall.",
      rating: 4,
    },
  ],
};

export function getArticleExtras(slug) {
  if (slug === "dubai-cost-of-living-2026-guide") {
    return costOfLivingGuide;
  }

  return {
    intro: [
      "This long-form guide is designed for practical implementation with clear structure and real-world decision points.",
      "Follow the steps below in sequence and use weekly reviews to keep your plan effective.",
    ],
    highlights: [
      "Start with verified requirements",
      "Organize documents and timelines early",
      "Track progress weekly",
      "Use official channels for updates",
    ],
    midImages: defaultStepImages.slice(0, 2),
    steps: [
      {
        title: "Step 1: Understand Your Goal",
        detail: "Define the exact outcome and deadline before starting any process.",
        image: defaultStepImages[0],
      },
      {
        title: "Step 2: Prepare Required Inputs",
        detail: "Collect documents, financial estimates, and contact points in one place.",
        image: defaultStepImages[1],
      },
      {
        title: "Step 3: Execute with Checklist",
        detail: "Use a simple checklist so no mandatory action is missed.",
        image: defaultStepImages[2],
      },
      {
        title: "Step 4: Verify and Optimize",
        detail: "Review outcomes, remove mistakes, and improve next cycle planning.",
        image: defaultStepImages[3],
      },
    ],
    budgetRows: [],
    comments: [
      {
        name: "Reader",
        text: "Helpful and easy to follow. Thanks for the clear steps.",
        rating: 5,
      },
    ],
  };
}
