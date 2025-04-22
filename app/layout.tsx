// app/layout.tsx
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
  title: "Rajkumar G – Portfolio",
  description: "AI Developer and Data Scientist Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
    >
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