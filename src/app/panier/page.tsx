"use client";

import { useLocale } from "../../i18n/LocaleProvider";
import { t } from "../../i18n/i18n";
import { useCart } from "@/context/CartContext"; // on appelle le hook utilitaire sans utiliser useContext !!!
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function PanierPage() {
  const { locale } = useLocale();
  const { cart, addToCart, decrementFromCart, removeFromCart } = useCart();

  // somme des (prix * quantité) de chaque produit
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col flex-1 w-full p-8">
      <h1
        className="text-2xl font-semibold mb-6 text-center"
        aria-label={t(locale, "cart.yourCart")}
      >
        {t(locale, "cart.yourCart")}
      </h1>

      {/* si panier vide affiche panier vide, sinon affiche la liste des produits */}
      {cart.length === 0 ? (
        <p className="text-center">{t(locale, "cart.empty")}</p>
      ) : (
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
          {cart.map((item) => (
            <Card
              key={item._id}
              className="flex items-center gap-4 overflow-hidden p-4"
              aria-label={`${item.name[locale as keyof typeof item.name]}, ${item.price} ${item.currency}`}
            >
              <img
                src={item.image}
                alt={item.name[locale as keyof typeof item.name]}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex flex-col flex-1 text-left">
                <p className="font-medium">{item.name[locale as keyof typeof item.name]}</p>
                <p className="text-sm text-gray-500">
                  {item.price} {item.currency}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  ariaLabel={`${t(locale, "cart.delete")} 1 ${item.name[locale as keyof typeof item.name]}`}
                  onClick={() => decrementFromCart(item._id)}
                >
                  -
                </Button>

                <span className="px-2 font-semibold" aria-live="polite">
                  {item.quantity}
                </span>

                <Button
                  variant="secondary"
                  ariaLabel={`${t(locale, "cart.add")} 1 ${item.name[locale as keyof typeof item.name]}`}
                  onClick={() => addToCart(item)}
                >
                  +
                </Button>
              </div>

              {/* Suppression du produit */}
              <Button
                variant="primary"
                onClick={() => removeFromCart(item._id)}
                ariaLabel={`${t(locale, "cart.delete")} ${item.name[locale as keyof typeof item.name]} ${t(locale, "cart.fromCart")}`}
              >
                {t(locale, "cart.cancel")}
              </Button>
            </Card>
          ))}

          <Card className="flex flex-col gap-4 p-4 border-t border-[var(--border)]">
            <div className="flex justify-between items-center font-semibold text-lg">
              <span>{t(locale, "cart.total")}</span>
              <span>
                {total} {cart[0]?.currency}
              </span>
            </div>

            {/* Validation du panier => simulation par un alert! to do: remplacer par un vrai processus de checkout (authentification cliet et simulation paiement */}
            <Button
              variant="primary"
              ariaLabel={t(locale, "cart.validate")}
              className="w-full"
              onClick={() => alert(t(locale, "cart.validateSuccess"))}
            >
              {t(locale, "cart.validate")}
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
