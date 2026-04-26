import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mahmoud Abdalgelel | Frontend Developer & UI/UX Designer",
    template: "%s | Mahmoud Abdalgelel",
  },
  description:
    "A cinematic portfolio for Mahmoud Abdalgelel, frontend developer and UI/UX designer crafting premium digital experiences.",
  keywords: [
    "Mahmoud Abdalgelel",
    "Frontend Developer",
    "UI/UX Designer",
    "Flutter Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Mahmoud Abdalgelel" }],
  creator: "Mahmoud Abdalgelel",
  metadataBase: new URL("https://mahmoud-abdalgelel.com"),
  openGraph: {
    title: "Mahmoud Abdalgelel | Frontend Developer & UI/UX Designer",
    description:
      "A dark futuristic portfolio blending creative design, frontend engineering, and polished motion.",
    type: "website",
    locale: "en_US",
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
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background font-body text-foreground selection:bg-cyan-spark/25 selection:text-cyan-50">
        {children}
      </body>
    </html>
  );
}
