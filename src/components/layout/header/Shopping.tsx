"use client";

import { useTheme } from "next-themes";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext"; // on appelle le hook utilitaire sans utiliser useContext !!!

export default function Shopping() {
  const { locale } = useLocale();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link href="/panier" className="ml-2 sm:ml-3 flex items-center space-x-2">
      <Image
        src={theme === "dark" ? "/shopping-dark.png" : "/shopping-light.png"}
        alt={t(locale, "a11y.shoppingBag")}
        width={28}
        height={28}
        className="shopping-icon w-5 h-5 sm:w-7 sm:h-7"
      />
      <span>
        {t(locale, "cart.yourCart")} [{cartCount}]
      </span>
    </Link>
  );
}
