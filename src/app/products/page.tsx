"use client";

import { useEffect, useState } from "react";
import { useLocale } from "../../i18n/LocaleProvider";
import { t } from "../../i18n/i18n";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";

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

export default function ProductsPage() {
  const { locale } = useLocale();
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data: Product[] = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleShowMore = () => {
    setLimit((prev) => prev + 6);
  };

  return (
    <div className="flex flex-col items-center flex-1 w-full p-20 gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {products.slice(0, limit).map((p) => (
          <ProductCard
            key={p._id}
            id={p._id}
            name={p.name[locale as keyof Translation]}
            description={p.description[locale as keyof Translation]}
            image={p.image}
            price={p.price}
            currency={p.currency}
            onAction={() => alert(`Produit ajouté: ${p._id}`)}
            actionLabel={t(locale, "cart.add")}
            actionVariant="primary"
          />
        ))}
      </div>

      {limit < products.length && (
        <Button variant="secondary" onClick={handleShowMore}>
          {t(locale, "products.showMore")}
        </Button>
      )}
    </div>
  );
}
