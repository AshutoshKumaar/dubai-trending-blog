import { Geist_Mono, Mooli } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import Script from "next/script";

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
  alternates: {
    canonical: "/",
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
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3336554213083495"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${mooli.variable} ${geistMono.variable} antialiased`}>
        <div>
          <SiteNavbar />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}