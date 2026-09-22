import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const aptos = Inter({
  subsets: ["latin"],
  variable: "--font-aptos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicole Tal - AI-Savvy Instructional Designer",
  description: "AI-savvy instructional designer blending human-centered learning strategy with emerging technology. Specializing in AI integration, chatbot development, and custom learning solutions.",
  keywords: ["instructional design", "AI integration", "learning technology", "chatbot development", "training optimization"],
  authors: [{ name: "Nicole Tal" }],
  openGraph: {
    title: "Nicole Tal - AI-Savvy Instructional Designer",
    description: "AI-savvy instructional designer blending human-centered learning strategy with emerging technology",
    url: "https://idnicoletal.com",
    siteName: "Nicole Tal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicole Tal - AI-Savvy Instructional Designer",
    description: "AI-savvy instructional designer blending human-centered learning strategy with emerging technology",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aptos.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
