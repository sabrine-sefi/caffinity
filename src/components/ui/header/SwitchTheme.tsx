"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";
import { useEffect, useState } from "react";

export default function SwitchTheme() {
  const { locale } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // après montage, on suit l'état réel du thème (system inclus)
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t(locale, "a11y.switchTheme")}
      title={isDark ? t(locale, "a11y.switchLight") : t(locale, "a11y.switchDark")}
      className="focus-ring"
    >
      <Image src="/dark.png" alt="" width={512} height={512} className="h-4 w-4 icon-go-dark" />
      <Image src="/light.png" alt="" width={512} height={512} className="h-4 w-4 icon-go-light" />
    </button>
  );
}
