"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";
import Image from "next/image";
import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import Logo from "./logo/Logo";
import SwitchTheme from "./SwitchTheme";
import Shopping from "./Shopping";
import NavList from "./NavList";
import FloatingBox from "@/ds/FloatingBox";

export default function Navbar() {
  const { locale } = useLocale();
  const [isOpen, setOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // fix bug icon dark/light au refresh => marquer le composant comme monté
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 w-full glass-nav text-[var(--text)]">
      <nav
        aria-label={t(locale, "a11y.labelPrincipal")}
        className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-8"
      >
        {/* burger + logo */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={isOpen ? t(locale, "a11y.closeBurger") : t(locale, "a11y.openBurger")}
            className="lg:hidden flex items-center focus-ring"
          >
            {mounted && (
              <Image
                src={theme === "light" ? "/burger-dark.png" : "/burger-light.png"}
                alt=""
                width={512}
                height={512}
                className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer"
              />
            )}
          </button>
          <Logo />
        </div>

        {/* desktop */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <NavList />
          </div>
          <div className="flex items-center">
            <Shopping />
            <SwitchLanguage />
            <SwitchTheme />
          </div>
        </div>
      </nav>

      {/* mobile */}
      {isOpen && (
        <FloatingBox
          onClose={() => setOpen(false)}
          className="top-full left-0 w-[calc(100%-1rem)] mx-2 sm:w-64"
        >
          <ul role="listbox">
            <li>
              <div role="option" aria-selected={false}>
                <NavList burger closeBox={() => setOpen(false)} />
              </div>
            </li>
          </ul>
        </FloatingBox>
      )}
    </header>
  );
}
