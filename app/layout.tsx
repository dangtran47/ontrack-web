import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ontrack.guru"),
  applicationName: "On Track Guru",
  title: { default: "On Track Guru", template: "%s · On Track Guru" },
  description: "A focused family of apps to help you stay on track.",
  keywords: ["focused apps", "workout tracker", "habit tracker", "privacy-first apps", "mobile-first apps"],
  authors: [{ name: "On Track Guru", url: "https://ontrack.guru" }],
  creator: "On Track Guru",
  publisher: "On Track Guru",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    url: "https://ontrack.guru",
    siteName: "On Track Guru",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fef9ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ontrack.guru/#organization",
      name: "On Track Guru",
      url: "https://ontrack.guru",
      logo: "https://ontrack.guru/icon.svg",
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@ontrack.guru",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ontrack.guru/#website",
      name: "On Track Guru",
      url: "https://ontrack.guru",
      publisher: { "@id": "https://ontrack.guru/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
