import type { Metadata } from "next";
import { Orbitron, Poppins, Space_Mono } from "next/font/google"; // Ensure fonts are imported
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  description: "Portfolio of Stiven Arifaj - Creative Web Developer, Designer, 3D Creator, and Founder of MoneyRush FinCity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${poppins.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
