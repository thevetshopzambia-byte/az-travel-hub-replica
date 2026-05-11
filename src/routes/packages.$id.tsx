import { createFileRoute, Link, useNavigate, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Calendar, MapPin } from "lucide-react";
import { getPackage } from "@/lib/packages";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/packages/$id")({
  component: PackageDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-[1440px] px-6 py-20 text-center">
      <h1 className="text-3xl">Package not found</h1>
      <Link to="/packages" className="mt-4 inline-block text-brand hover:underline">Back to packages</Link>
    </div>
  ),
  loader: ({ params }) => {
    const pkg = getPackage(params.id);
    if (!pkg) throw notFound();
    return pkg;
  },
});

function PackageDetail() {
  const pkg = Route.useLoaderData();
  const [travelers, setTravelers] = useState(2);
  const { add } = useCart();
  const nav = useNavigate();

  const total = pkg.price * travelers;

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-10">
      <Link to="/packages" className="text-sm text-brand hover:underline">← Back to packages</Link>

      <div className="mt-4 grid lg:grid-cols-[1fr_400px] gap-10">
        <div>
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-secondary">
            <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover" />
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 text-sm text-brand font-semibold uppercase tracking-wider">
              <MapPin className="h-4 w-4" />
              {pkg.destination}
            </div>
            <h1 className="mt-2 text-3xl lg:text-4xl">{pkg.name}</h1>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {pkg.nights} nights
            </div>
            <p className="mt-5 text-foreground/80 leading-relaxed text-lg">{pkg.description}</p>

            <h2 className="mt-8 text-xl font-semibold">What's included</h2>
            <ul className="mt-3 space-y-2">
              {pkg.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-xl font-semibold">Sample Itinerary</h2>
            <ol className="mt-3 space-y-3">
              {Array.from({ length: Math.min(pkg.nights, 5) }).map((_, i) => (
                <li key={i} className="border-l-2 border-brand pl-4">
                  <div className="font-semibold">Day {i + 1}</div>
                  <div className="text-sm text-muted-foreground">
                    Guided exploration, hotel check-in, and curated dining experiences.
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start rounded-xl border border-border bg-white p-6 shadow-sm">
          <div className="text-sm text-muted-foreground">From</div>
          <div className="text-4xl font-bold text-brand">${pkg.price}<span className="text-base font-normal text-muted-foreground"> /person</span></div>

          <label className="mt-5 block text-sm font-medium">Travelers</label>
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={() => setTravelers((n) => Math.max(1, n - 1))}
              className="h-10 w-10 rounded-md border border-border hover:bg-secondary"
              aria-label="Decrease"
            >−</button>
            <span className="text-lg font-semibold w-8 text-center">{travelers}</span>
            <button
              onClick={() => setTravelers((n) => n + 1)}
              className="h-10 w-10 rounded-md border border-border hover:bg-secondary"
              aria-label="Increase"
            >+</button>
          </div>

          <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="text-2xl font-bold">${total.toLocaleString()}</span>
          </div>

          <button
            onClick={() => { add(pkg, travelers); nav({ to: "/cart" }); }}
            className="mt-5 w-full rounded-md bg-brand text-primary-foreground py-3 font-semibold hover:bg-brand-dark transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => add(pkg, travelers)}
            className="mt-2 w-full rounded-md border border-brand text-brand py-3 font-semibold hover:bg-brand/5 transition"
          >
            Add & Keep Browsing
          </button>
        </aside>
      </div>
    </div>
  );
}
