"use client";

import Link from "next/link";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";

interface NavListProps {
  burger?: boolean;
}

export default function NavList({ burger = false }: NavListProps) {
  const { locale } = useLocale();

  return (
    <nav aria-label={t(locale, "a11y.mainNavigation")}>
      <ul className={burger ? "flex flex-col gap-2" : "flex items-center gap-6"}>
        <li>
          <Link
            href="/"
            className="font-medium text-base transition-colors hover-primary focus-ring block px-4 py-2"
          >
            {t(locale, "home.home")}
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="font-medium text-base transition-colors hover-primary focus-ring block px-4 py-2"
          >
            {t(locale, "nav.about")}
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="font-medium text-base transition-colors hover-primary focus-ring block px-4 py-2"
          >
            {t(locale, "nav.products")}
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="font-medium text-base transition-colors hover-primary focus-ring block px-4 py-2"
          >
            {t(locale, "nav.contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
