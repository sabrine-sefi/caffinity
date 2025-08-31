"use client";

import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border shadow-md transition",
        "bg-[var(--surface)] border-[var(--border)] text-[var(--text)]",
        className
      )}
    >
      {children}
    </div>
  );
}
