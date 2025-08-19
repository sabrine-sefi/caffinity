"use client";

import { useTheme } from "next-themes";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Shopping() {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link href="/panier" className="ml-2 sm:ml-3 flex items-center">
      <Image
        src={theme === "dark" ? "/shopping-dark.png" : "/shopping-light.png"}
        alt={t(locale, "a11y.shoppingBag")}
        width={512}
        height={512}
        className="shopping-icon cursor-pointer"
      />
    </Link>
  );
}
