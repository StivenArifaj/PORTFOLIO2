import type { Metadata } from "next";
import { Orbitron, Poppins, Space_Mono } from "next/font/google"; // Ensure fonts are imported
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LiquidGlassFilter } from "@/components/ui/liquid-glass-filter";
import { StarsCanvas } from "@/components/ui/star-background";
import { DesktopRecommendation } from "@/components/ui/desktop-recommendation";

// Font configurations
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Stiven Arifaj | Creative Web Developer & Startup Founder",
  description: "Portfolio of Stiven Arifaj - Creative Web Developer, Designer, 3D Creator, and Founder of MoneyRush FinCity. Specializing in React, Next.js, and modern web technologies.",
  keywords: ["Stiven Arifaj", "Web Developer", "Software Engineer", "React Developer", "Next.js", "MoneyRush", "Albania Developer", "Portfolio"],
  authors: [{ name: "Stiven Arifaj" }],
  creator: "Stiven Arifaj",
  publisher: "Stiven Arifaj",
  metadataBase: new URL('https://stivenarifaj.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stivenarifaj.com',
    title: "Stiven Arifaj | Creative Web Developer & Startup Founder",
    description: "Portfolio showcasing 15+ innovative web projects, mobile apps, and SaaS platforms. Winner of Startup City 2025 (3rd Place, €500 Prize) with MoneyRush FinCity.",
    siteName: "Stiven Arifaj Portfolio",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stiven Arifaj - Web Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stiven Arifaj | Creative Web Developer",
    description: "Portfolio showcasing 15+ web projects | MoneyRush Founder | Startup City Winner",
    images: ['/og-image.png'],
    creator: '@stivenarifaj',
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
  verification: {
    google: 'your-google-verification-code', // TODO: Add after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${poppins.variable} ${spaceMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Stiven Arifaj",
              "jobTitle": "Software Engineer & Web Developer",
              "description": "Creative Web Developer, Designer, and Founder of MoneyRush FinCity",
              "url": "https://stivenarifaj.com",
              "image": "https://stivenarifaj.com/og-image.png",
              "sameAs": [
                "https://github.com/stivenarifaj",
                "https://linkedin.com/in/stivenarifaj1"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "MoneyRush FinCity",
                "description": "Gamified financial literacy platform for youth"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "TUMO Center for Creative Technologies"
              },
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "UI/UX Design",
                "Full-Stack Development",
                "Mobile App Development"
              ],
              "award": "Startup City 2025 - 3rd Place (MoneyRush FinCity)",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AL",
                "addressRegion": "Albania"
              }
            })
          }}
        />

        {/* Preload Spline assets for faster robot loading */}
        <link rel="preload" href="/spline/spline-viewer.js" as="script" />
        <link rel="preload" href="/spline/robot-scene.splinecode" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/spline/process.js" as="script" />
      </head>
      <body className="antialiased bg-[#030014] text-foreground overflow-x-hidden overflow-y-scroll">
        <StarsCanvas />
        <DesktopRecommendation />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LiquidGlassFilter />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
