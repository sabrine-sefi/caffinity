"use client";

import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "compact";
};

export default function Card({ children, className, variant = "default" }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border shadow-md transition",
        "bg-[var(--surface)] border-[var(--border)] text-[var(--text)]",
        variant === "compact" && "p-2 shadow-sm", // style plus léger
        className
      )}
    >
      {children}
    </div>
  );
}
