"use client";

import Link from "next/link";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";

export default function NavList() {
  const { locale } = useLocale();

  return (
    <nav aria-label={t(locale, "a11y.mainNavigation")}>
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="/"
            className="font-medium text-base transition-colors hover-primary focus-ring"
          >
            {t(locale, "home.home")}
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="font-medium text-base transition-colors hover-primary focus-ring"
          >
            {t(locale, "nav.about")}
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="font-medium text-base transition-colors hover-primary focus-ring"
          >
            {t(locale, "nav.products")}
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="font-medium text-base transition-colors hover-primary focus-ring"
          >
            {t(locale, "nav.contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
