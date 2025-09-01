"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type FloatingBoxProps = {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

export default function FloatingBox({ children, onClose, className }: FloatingBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [closingAnim, setClosingAnim] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      // fix: ferme pour tout clic sauf à l'intérieur de la box
      // si clic à l’intérieur de la box (boxRef) => on ignore le clic
      if (boxRef.current?.contains(target)) return;

      // sinon, c'est un clic extérieur => ferme
      onClose();
      closeAnimate();
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") closeAnimate();
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeAnimate() {
    setClosingAnim(true);
    setTimeout(() => onClose(), 120); // pour synchro avec animate-out
  }

  return (
    <div
      ref={boxRef}
      className={clsx(
        "absolute rounded-md shadow-lg overflow-hidden p-2",
        "bg-[var(--bg)] border border-[var(--border)]",
        closingAnim ? "animate-out" : "animate-in",
        className
      )}
    >
      {children}
    </div>
  );
}
