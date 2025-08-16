import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caffinity",
  description: "Small coffee-gear shop built with Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
