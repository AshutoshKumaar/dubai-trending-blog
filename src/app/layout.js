import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://dubaitrendingblog.com"),
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
    url: "https://dubaitrendingblog.com",
    siteName: "Dubai Trending Blog",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
