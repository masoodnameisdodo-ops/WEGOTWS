import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "High-end Scrollytelling Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-white bg-[#121212]`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
