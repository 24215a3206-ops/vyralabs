import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { SkipToContent } from "@/components/skip-to-content";
import { ErrorBoundary } from "@/components/error-boundary";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vyralabs.systems'),
  title: {
    default: "Vyra Labs | Elite Digital Product Studio | SaaS MVP Development",
    template: "%s | Vyra Labs - Digital Product Studio"
  },
  description: "Vyra Labs is an elite digital product studio specializing in SaaS MVP development, high-performance websites, and enterprise tools. We craft world-class digital products with founder-level clarity and bulletproof engineering. From zero to launch in weeks, not months.",
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/manifest.json',
  keywords: [
    "Vyra Labs",
    "VyraLabs",
    "vyralabs.systems",
    "digital product studio",
    "SaaS MVP development",
    "high-performance web development",
    "Next.js experts",
    "product engineering",
    "startup technology partner",
    "custom software development",
    "scalable architecture",
    "UI/UX design engineering",
    "rapid prototyping",
    "technical co-founder alternative",
    "enterprise web applications",
    "web development agency",
    "software development company",
    "Hyderabad tech startup"
  ],
  authors: [{ name: "Vyra Labs", url: "https://vyralabs.systems" }],
  creator: "Vyra Labs",
  publisher: "Vyra Labs",
  formatDetection: {
    email:  false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google6ce82cf764e01529",
  },

  openGraph: {
    title: "Vyra Labs | Elite Digital Product Studio | SaaS MVP Development",
    description: "Vyra Labs builds high-performance digital products with founder-level clarity and world-class engineering. SaaS MVPs, enterprise tools, and conversion-optimized websites.",
    type: "website",
    locale: "en_US",
    url: "https://vyralabs.systems",
    siteName: "Vyra Labs",
    images: [{
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'Vyra Labs — Elite Digital Product Studio',
      type: 'image/png',
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vyralabs",
    creator: "@vyralabs",
    title: "Vyra Labs | Elite Digital Product Studio | SaaS MVP Development",
    description: "Vyra Labs builds high-performance digital products - SaaS MVPs, enterprise tools, and websites. World-class design meets bulletproof engineering.",
    images: [{
      url: '/opengraph-image',
      alt: 'Vyra Labs — Elite Digital Product Studio'
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vyralabs.systems',
  },
  category: 'technology',
  classification: 'Digital Product Development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll />
          <KeyboardShortcuts />
          <SkipToContent />
          <Analytics />
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
