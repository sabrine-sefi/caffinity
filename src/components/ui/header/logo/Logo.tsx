"use client";

import Image from "next/image";
import Link from "next/link";
import { t } from "../../../../i18n/i18n";
import { useLocale } from "../../../../i18n/LocaleProvider";
import { tokens } from "../../../../styles/tokens";
import { useTheme } from "next-themes";

export default function Logo() {
  const { locale } = useLocale();
  const { theme } = useTheme();

  const textShadow =
    theme === "dark"
      ? "0 1px 2px rgba(0,0,0,0.8)"
      : "0 1px 2px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)";

  return (
    <Link
      href="/"
      className="flex items-center min-h-10 focus-ring no-underline"
      style={{ textDecoration: "none" }}
      aria-label={t(locale, "brand.logoAlt")}
    >
      <Image src="/logo.png" alt="" width={512} height={512} className="h-8 w-8 drop-shadow-xl" />
      <span
        className="ml-2 text-2xl font-bold"
        style={{
          fontFamily: tokens.font.titles,
          color: tokens.light.primary,
          textShadow,
        }}
      >
        CaffinitY
      </span>
    </Link>
  );
}
