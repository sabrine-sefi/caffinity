"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded font-medium transition-colors shadow-md border-[var(--border)] text-[var(--text)]",
        variant === "primary" && "bg-[var(--primary)]",
        variant === "secondary" && "bg-[var(--surface)] ",
        className
      )}
    >
      {children}
    </button>
  );
}
