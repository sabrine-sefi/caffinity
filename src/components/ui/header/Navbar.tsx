"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "../../../i18n/LocaleProvider";
import { t } from "../../../i18n/i18n";
import Image from "next/image";
import SwitchLanguage from "./switchLanguage/SwitchLanguage";
import Logo from "./logo/Logo";
import SwitchTheme from "./SwitchTheme";
import Shopping from "./Shopping";
import NavList from "./NavList";

export default function Navbar() {
  const { locale } = useLocale();
  const [isOpen, setOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ref pour menu mobile
  const menuRef = useRef<HTMLUListElement | null>(null);

  // fix bug icon dark/light au refresh => marquer le composant comme monté!
  useEffect(() => {
    setMounted(true);
  }, []);

  // gerer close menu si clic dehors ou esc
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // style liste DS
  const listStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    minWidth: "70px",
    zIndex: 9,
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
    backgroundColor: "var(--bg)",
  };

  // style bouton DS
  const buttonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px",
    cursor: "pointer",
    color: "var(--text)",
    textDecorationColor: "var(--primary)",
  };

  return (
    <header className="sticky top-0 w-full glass-nav text-[var(--text)]">
      <nav
        aria-label={t(locale, "a11y.labelPrincipal")}
        className="flex items-center justify-between py-4 px-6 md:px-8"
      >
        {/* burger + logo */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((ev) => !ev)}
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
                className="h-7 w-7 cursor-pointer"
              />
            )}
          </button>
          <Logo />
        </div>

        {/* desktop */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <NavList />
          </div>
          <div className="flex items-center gap-2">
            <Shopping />
            <SwitchLanguage />
            <SwitchTheme />
          </div>
        </div>
      </nav>

      {/* mobile */}
      {isOpen && (
        <ul
          ref={menuRef}
          role="listbox"
          style={listStyle}
          className="absolute top-full left-0 rounded-lg lg:hidden glass-nav px-4"
        >
          <li>
            <div role="option" aria-selected={false} style={buttonStyle}>
              <NavList burger />
            </div>
          </li>
        </ul>
      )}
    </header>
  );
}
