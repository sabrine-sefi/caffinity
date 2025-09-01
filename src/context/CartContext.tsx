"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Translation = {
  fr: string;
  en: string;
  es: string;
};

type Product = {
  _id: string;
  name: Translation;
  description: Translation;
  image: string;
  price: number;
  currency: string;
  category: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
