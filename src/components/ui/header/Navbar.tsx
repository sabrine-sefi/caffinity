"use client";

import Image from "next/image";
import { tokens } from "../../../styles/tokens";
import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";

export default function Navbar() {
  const { locale } = useLocale();

  // font logo: to fix !
  const fontStyle = {
    fontFamily: tokens.font.titles,
    color: tokens.light.primary,
  };

  return (
    <header className="sticky top-0 z-40 bg-bg w-full">
      <nav
        aria-label={t(locale, "a11y.labelPrincipal")}
        className="flex items-center justify-between px-4 py-3"
      >
        <a href="/" className="flex items-center min-h-10">
          <Image
            src="/logo.png"
            alt={t(locale, "brand.logoAlt")}
            width={512}
            height={512}
            className="h-8 w-8 rounded-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]"
          />
          <span
            className="text-2xl font-bold tracking-wide p-1 text-black dark:text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]"
            style={fontStyle}
          >
            CaffinitY
          </span>
        </a>
        <SwitchLanguage />
      </nav>
    </header>
  );
}
