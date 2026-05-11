import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your Cart — aztravelhub.net" }] }),
  component: CartPage,
});

function CartPage() {
  const { items, remove, setTravelers, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1440px] px-6 py-20 text-center">
        <h1 className="text-3xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Find your next adventure to get started.</p>
        <Link to="/packages" className="mt-6 inline-block rounded-md bg-brand text-primary-foreground px-6 py-3 font-semibold hover:bg-brand-dark">
          Browse Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-12">
      <h1 className="text-3xl lg:text-4xl mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-[1fr_380px] gap-8">
        <div className="space-y-4">
          {items.map(({ pkg, travelers }) => (
            <div key={pkg.id} className="flex gap-4 rounded-xl border border-border bg-white p-4">
              <img src={pkg.image} alt={pkg.name} className="h-32 w-40 object-cover rounded-lg shrink-0" />
              <div className="flex-1 min-w-0">
                <Link to="/packages/$id" params={{ id: pkg.id }} className="font-semibold hover:text-brand">
                  {pkg.name}
                </Link>
                <div className="text-sm text-muted-foreground">{pkg.destination} · {pkg.nights} nights</div>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Travelers:</span>
                    <button
                      onClick={() => setTravelers(pkg.id, travelers - 1)}
                      className="h-8 w-8 rounded border border-border hover:bg-secondary"
                    >−</button>
                    <span className="w-6 text-center font-semibold">{travelers}</span>
                    <button
                      onClick={() => setTravelers(pkg.id, travelers + 1)}
                      className="h-8 w-8 rounded border border-border hover:bg-secondary"
                    >+</button>
                  </div>
                  <button onClick={() => remove(pkg.id)} className="ml-auto text-sm text-destructive hover:underline inline-flex items-center gap-1">
                    <Trash2 className="h-4 w-4" /> Remove
                  </button>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-muted-foreground">${pkg.price} × {travelers}</div>
                <div className="text-xl font-bold text-brand">${(pkg.price * travelers).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-xl border border-border bg-white p-6 h-fit">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>${total.toLocaleString()}</dd></div>
            <div className="flex justify-between"><dt>Service fee</dt><dd>$0</dd></div>
            <div className="flex justify-between"><dt>Taxes</dt><dd>Included</dd></div>
          </dl>
          <div className="mt-4 pt-4 border-t border-border flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="text-2xl font-bold text-brand">${total.toLocaleString()}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-5 block text-center w-full rounded-md bg-brand text-primary-foreground py-3 font-semibold hover:bg-brand-dark"
          >
            Proceed to Checkout
          </Link>
          <Link to="/packages" className="mt-3 block text-center text-sm text-brand hover:underline">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
