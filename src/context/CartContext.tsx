"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useMemo } from "react";

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

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  addToCart: (product: Product) => void;
  decrementFromCart: (id: string) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Init panier à partir du localStorage => restaurer l’état du panier apres un refresh de la page
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // chaque fois que le panier change => save dans le localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // incrémentation:
  const addToCart = (product: Product) => {
    setCart((prev) => {
      // on check si produit existe
      const existing = prev.find((p) => p._id === product._id);
      // si le produit existe déjà => on incrémente
      if (existing) {
        return prev.map((p) => (p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      // sinon on l’ajoute avec une quantité initiale de 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // décrémentation:
  // réduit de 1
  // si la quantité = 0 => produit retiré du panier
  const decrementFromCart = (id: string) => {
    setCart((prev) =>
      prev
        .map((p) => (p._id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  // Suppression totale du produit
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p._id !== id));
  };

  // calcul du nb total de produits dans le panier (quantités cumulées)
  const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, decrementFromCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook utilitaire:
// simplifie et sécurise l’accès au contexte => permet d’appeler directement useCart() au lieu de faire useContext(CartContext)
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
