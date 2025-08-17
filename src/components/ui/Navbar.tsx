"use client";

import Image from "next/image";
import { tokens } from "../../styles/tokens";

export default function Navbar() {
  const logoTitleStyle = {
    color: tokens.light.primary,
    fontFamily: tokens.font.titles,
    fontWeight: 700,
    letterSpacing: "0.05em",
    padding: "4px",
  };

  return (
    <header className="sticky top-0 z-40 bg-bg">
      <nav
        aria-label="Main"
        className="mx-auto max-w-6xl px-4 py-3 flex items-center"
      >
        <a href="/" className="flex items-center min-h-10">
          <Image
            src="/logo.png"
            alt="Caffinity Logo"
            width={512}
            height={512}
            className="h-6 w-6"
          />
          <span style={logoTitleStyle}>CaffinitY</span>
        </a>
      </nav>
    </header>
  );
}
