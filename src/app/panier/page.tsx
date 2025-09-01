"use client";

import { useLocale } from "../../i18n/LocaleProvider";
import { t } from "../../i18n/i18n";
import { useCart } from "@/context/CartContext";

export default function PanierPage() {
  const { locale } = useLocale();
  const { cart, removeFromCart } = useCart();

  return (
    <div className="flex flex-col flex-1 w-full p-8">
      <h1 className="text-2xl font-semibold mb-6 text-center">{t(locale, "cart.yourCart")}</h1>

      {cart.length === 0 ? (
        <p className="text-center">{t(locale, "cart.empty")}</p>
      ) : (
        <ul className="w-full max-w-md mx-auto space-y-4" role="list">
          {cart.map((item) => (
            <li
              key={item._id}
              role="listitem"
              className="flex justify-between items-center border p-4 rounded-lg shadow-sm "
            >
              <div className="text-left">
                <p className="font-medium">{item.name[locale as keyof typeof item.name]}</p>
                <p className="text-sm text-gray-500">
                  {item.price} {item.currency}
                </p>
              </div>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => removeFromCart(item._id)}
                aria-label={t(locale, "cart.cancel")}
              >
                {t(locale, "cart.cancel")}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
