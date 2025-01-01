import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"

const recoleta = localFont({
  src: "../public/fonts/Recoleta-Bold.ttf",
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Pushpendra Jaat",
  description: "Portfolio of Pushpendra Jaat - Showcasing projects, skills, and achievements.",
  keywords: ["Pushpendra Jaat", "Portfolio", "Web Developer", "Frontend Developer", "Projects", "React Developer", "Full Stack Coder"],
  openGraph: {
    title: "Pushpendra Jaat - Web Developer Portfolio",
    description: "Explore the portfolio of Pushpendra Jaat, featuring professional web development projects and expertise.",
    url: "",
    type: "website",
    images: [
      {
        url: "/images/portfolio-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio cover image of Pushpendra Jaat showcasing web development projects.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushpendra Jaat - Portfolio",
    description: "Discover the professional portfolio of Pushpendra Jaat.",
    images: ["/images/portfolio-cover.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body className={`${recoleta.variable}`}>{children} <Analytics /></body>
    </html>
  );
}
