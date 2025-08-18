"use client";

import Image from "next/image";
import { t } from "../../../../i18n/i18n";
import { useLocale } from "../../../../i18n/LocaleProvider";
import { tokens } from "../../../../styles/tokens";
import React from "react";

export default function Logo() {
  const { locale } = useLocale();

  const fontStyle = {
    fontFamily: tokens.font.titles,
    color: tokens.light.primary,
  };
  return (
    <a
      href="/"
      className="flex items-center min-h-10 focus-ring"
      aria-label={t(locale, "brand.logoAlt")}
    >
      <Image
        src="/logo.png"
        alt=""
        width={512}
        height={512}
        className="h-8 w-8 rounded-full"
      />
      <span className="ml-2 text-2xl font-bold tracking-wide" style={fontStyle}>
        CaffinitY
      </span>
    </a>
  );
}
