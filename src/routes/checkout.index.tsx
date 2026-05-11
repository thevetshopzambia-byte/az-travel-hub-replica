import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Lock, CreditCard } from "lucide-react";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout/")({
  head: () => ({ meta: [{ title: "Checkout — aztravelhub.net" }] }),
  component: Checkout,
});

function Checkout() {
  const { items, total, clear } = useCart();
  const nav = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1440px] px-6 py-20 text-center">
        <h1 className="text-3xl">Nothing to check out</h1>
        <Link to="/packages" className="mt-4 inline-block text-brand hover:underline">Browse packages</Link>
      </div>
    );
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      clear();
      nav({ to: "/checkout/success" });
    }, 1200);
  };

  const formatCard = (v: string) => v.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
  const formatExp = (v: string) => v.replace(/\D/g, "").slice(0, 4).replace(/(\d{2})(?=\d)/, "$1/");

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-12">
      <h1 className="text-3xl lg:text-4xl mb-8">Checkout</h1>
      <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_400px] gap-8">
        <div className="space-y-8">
          <section className="rounded-xl border border-border bg-white p-6">
            <h2 className="text-xl font-semibold">Traveler Information</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Field label="First name" name="firstName" required />
              <Field label="Last name" name="lastName" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
          </section>

          <section className="rounded-xl border border-border bg-white p-6">
            <h2 className="text-xl font-semibold">Billing Address</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Field label="Address" name="address" className="sm:col-span-2" required />
              <Field label="City" name="city" required />
              <Field label="Postal code" name="postal" required />
              <Field label="Country" name="country" required />
            </div>
          </section>

          <section className="rounded-xl border border-border bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-brand" /> Card Details
              </h2>
              <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                <Lock className="h-3 w-3" /> Encrypted SSL
              </span>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Field label="Cardholder name" name="cardName" className="sm:col-span-2" required />
              <CardField label="Card number" placeholder="1234 5678 9012 3456" formatter={formatCard} className="sm:col-span-2" />
              <CardField label="Expiry (MM/YY)" placeholder="MM/YY" formatter={formatExp} />
              <Field label="CVV" name="cvv" type="text" maxLength={4} required />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              All transactions are processed in US Dollars ($). By submitting, you agree to our{" "}
              <Link to="/legal/terms" className="text-brand hover:underline">Terms</Link> and{" "}
              <Link to="/legal/refund" className="text-brand hover:underline">Refund Policy</Link>.
            </p>
          </section>
        </div>

        <aside className="rounded-xl border border-border bg-white p-6 h-fit lg:sticky lg:top-24">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <ul className="mt-4 space-y-3">
            {items.map(({ pkg, travelers }) => (
              <li key={pkg.id} className="flex justify-between text-sm">
                <span className="pr-2">{pkg.name} <span className="text-muted-foreground">× {travelers}</span></span>
                <span className="font-semibold">${(pkg.price * travelers).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-border flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="text-2xl font-bold text-brand">${total.toLocaleString()}</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-5 w-full rounded-md bg-brand text-primary-foreground py-3 font-semibold hover:bg-brand-dark disabled:opacity-60"
          >
            {submitting ? "Processing..." : `Pay $${total.toLocaleString()}`}
          </button>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label, name, type = "text", required, className = "", maxLength,
}: { label: string; name: string; type?: string; required?: boolean; className?: string; maxLength?: number }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-medium mb-1">{label}{required && " *"}</span>
      <input
        name={name} type={type} required={required} maxLength={maxLength}
        className="w-full px-3 py-2 border border-border rounded-md outline-none focus:border-brand text-sm"
      />
    </label>
  );
}

function CardField({
  label, placeholder, formatter, className = "",
}: { label: string; placeholder: string; formatter: (v: string) => string; className?: string }) {
  const [v, setV] = useState("");
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-medium mb-1">{label} *</span>
      <input
        value={v}
        onChange={(e) => setV(formatter(e.target.value))}
        placeholder={placeholder}
        required
        className="w-full px-3 py-2 border border-border rounded-md outline-none focus:border-brand text-sm font-mono tracking-wider"
      />
    </label>
  );
}
