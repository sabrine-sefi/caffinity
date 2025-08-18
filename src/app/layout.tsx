import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/ui/header/Navbar";
import { Livvic, Poppins, Parisienne } from "next/font/google";
import LocaleProvider from "../i18n/LocaleProvider";

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
      lang="fr"
      className={`${poppins.variable} ${livvic.variable} ${parisienne.variable}`}
      suppressHydrationWarning // fix hydrating error a cause du theme (coté client et layout cote serveur)
    >
      <body>
        {/* config a11y pour annoncer le changement de langue */}
        <div
          id="live-region"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />
        <LocaleProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem={true}
          >
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
