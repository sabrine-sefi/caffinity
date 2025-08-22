"use client";

import Link from "next/link";
import { useLocale } from "../../../i18n/LocaleProvider";
import { usePathname } from "next/navigation";
import { t } from "../../../i18n/i18n";

interface NavListProps {
  burger?: boolean;
  closeBox?: () => void;
}

export default function NavList({ burger = false, closeBox }: NavListProps) {
  const { locale } = useLocale();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t(locale, "home.home") },
    { href: "/about", label: t(locale, "nav.about") },
    { href: "/products", label: t(locale, "nav.products") },
    { href: "/contact", label: t(locale, "nav.contact") },
  ];

  return (
    <nav aria-label={t(locale, "a11y.mainNavigation")}>
      <ul className={burger ? "flex flex-col gap-2" : "flex items-center gap-6"}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              onClick={burger && closeBox ? closeBox : undefined}
              href={href}
              style={
                pathname === href
                  ? {
                      color: "var(--primary)",
                      textDecoration: "underline",
                      textDecorationColor: "var(--primary)",
                    }
                  : undefined
              }
              className="font-medium text-base transition-colors hover-primary focus-ring block px-4 py-2"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
