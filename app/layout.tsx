import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js SEO-Optimized Template | Modern Web Development", // Title should be within 60 characters
  description: "Build lightning-fast web applications with our SEO-optimized Next.js template. Features include performance optimization, accessibility standards, and modern development practices.", // Description should be within 150 characters 
  metadataBase: new URL('https://nextjs-seo-starter.vercel.app'),
  alternates: {
    canonical: './', // This is the canonical URL of the page and subpages
  },
  icons: {
    icon: '/favicon.ico',
    // apple: '/apple-touch-icon.png',
    // shortcut: '/favicon-16x16.png',
  },
  referrer: 'strict-origin-when-cross-origin'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <GoogleTagManager gtmId="GTM-xxxxxx" /> */} 
        {children}
        {/* <GoogleAnalytics gaId="G-xxxxxx" /> */}
      </body>
    </html>
  );
}
