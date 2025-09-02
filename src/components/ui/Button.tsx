"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "normal" | "compact";
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "normal",
  className,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        "cursor-pointer rounded font-medium transition-colors shadow-lg border-[var(--border)] text-[var(--text)]",
        // tailles
        size === "normal" && "px-4 py-2",
        size === "compact" && "px-2 py-1 text-sm",
        // variantes
        variant === "primary" && "bg-[var(--primary)]",
        variant === "secondary" && "bg-[var(--surface)]",
        variant === "danger" && "bg-red-500 text-white",
        className
      )}
    >
      {children}
    </button>
  );
}
