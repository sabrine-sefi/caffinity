import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/ui/Navbar";
import { Livvic, Poppins, Parisienne } from "next/font/google";

export const metadata: Metadata = {
  title: "CaffinitY",
  description: "Small coffee-gear shop built with Next.js + TypeScript",
};
// titles
const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

//content
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

// second
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-second",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${livvic.variable} ${parisienne.variable}`}
    >
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
