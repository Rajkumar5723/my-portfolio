import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins, Redressed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-redressed",
});

export const metadata: Metadata = {
  title: "Rajkumar G | AspiringData",
  description:
    "Portfolio of Rajkumar G — AI-focused developer and data-science professional, showcasing machine-learning, deep-learning, and automation projects.",
  keywords: [
    "Rajkumar G",
    "AspiringData",
    "AI Developer",
    "Data Scientist",
    "Machine Learning",
    "Deep Learning",
    "AI Portfolio",
    "ML Projects",
    "Data Analytics",
    "Artificial Intelligence",
  ],
  openGraph: {
    title: "Rajkumar G | AI Developer & Data Scientist – AspiringData",
    description:
      "Explore innovative AI, ML, and data-science projects by Rajkumar G, passionate about intelligent, data-driven solutions.",
    url: "https://rajkumarg.vercel.app",
    siteName: "Rajkumar G Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajkumar G – AI Developer & Data Scientist Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajkumar G | AI & Data-Science Portfolio",
    description:
      "Discover AI, ML, and data-science projects by Rajkumar G — AspiringData.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  creator: "Rajkumar G",
  authors: [{ name: "Rajkumar G", url: "https://rajkumarg.vercel.app" }],
  alternates: { canonical: "https://rajkumarg.vercel.app" },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="google-site-verification" content="Erplsgu00MaVqvzI9Ozr-QS3K_yqYnO0Hk2fMlGw2NY" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${redressed.variable} font-poppins`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          enableColorScheme
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
