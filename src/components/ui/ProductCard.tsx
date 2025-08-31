"use client";

import React from "react";
import clsx from "clsx";
import Button from "./Button";
import Card from "./Card";

type ProductCardProps = {
  id: string;
  name: string;
  description?: string;
  image: string;
  price: number;
  currency: string;
  onAction?: () => void;
  actionLabel?: string;
  actionVariant?: "primary" | "secondary";
  className?: string;
};

export default function ProductCard({
  id,
  name,
  description,
  image,
  price,
  currency,
  onAction,
  actionLabel,
  actionVariant = "primary",
  className,
}: ProductCardProps) {
  return (
    <Card
      className={clsx(
        "relative z-[-1] flex flex-col overflow-hidden transition-transform hover:scale-[1.02]",
        className
      )}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        {description && (
          <p className="text-sm text-[var(--text-muted)] line-clamp-2">{description}</p>
        )}
      </div>
      <div className="flex items-center justify-between p-4 border-t border-[var(--border)]">
        <span className="text-base font-bold">
          {price} {currency}
        </span>

        {onAction && actionLabel && (
          <Button variant={actionVariant} onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    </Card>
  );
}
