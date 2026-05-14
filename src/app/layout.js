import { Geist_Mono, Mooli } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";

const mooli = Mooli({
  variable: "--font-mooli",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://dubaitrendings.com"),
  title: {
    default: "Dubai Trending Blog | Local Insights, Lifestyle, and Business Updates",
    template: "%s | Dubai Trending Blog",
  },
  description:
    "Dubai Trending Blog publishes practical, original guides on Dubai lifestyle, travel, business trends, and city updates for residents and visitors.",
  applicationName: "Dubai Trending Blog",
  authors: [{ name: "Abdul Karim" }],
  creator: "Abdul Karim",
  publisher: "Dubai Trending Blog",
  category: "Dubai and UAE practical guides",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Dubai Trending Blog",
    description:
      "Fresh and practical Dubai insights covering lifestyle, tourism, local business, and trends.",
    url: "https://dubaitrendings.com",
    siteName: "Dubai Trending Blog",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "Ie9mejUfEYhbCNpUsFAGLQ_52HuJ1-UgXAFkEJm0rkU",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dubai Trending Blog",
    url: "https://dubaitrendings.com",
    publisher: {
      "@type": "Organization",
      name: "Dubai Trending Blog",
      url: "https://dubaitrendings.com",
    },
  };

  return (
    <html lang="en">
      
      {/* ✅ IMPORTANT: script HEAD ke andar */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className={`${mooli.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7698682190094249"
          crossOrigin="anonymous"
        />
        <div>
          <SiteNavbar />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
