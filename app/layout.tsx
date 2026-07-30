import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chetanya Singh — AI/ML Software Engineer | Portfolio",
  description:
    "Portfolio of Chetanya Singh — Software Engineer specializing in AI/ML, computer vision, and full-stack development. B.Tech CSE-AI/ML at VIT-AP.",
  keywords: [
    "Chetanya Singh",
    "AI",
    "ML",
    "Software Engineer",
    "Portfolio",
    "Machine Learning",
    "Computer Vision",
    "Full Stack Developer",
  ],
  authors: [{ name: "Chetanya Singh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
