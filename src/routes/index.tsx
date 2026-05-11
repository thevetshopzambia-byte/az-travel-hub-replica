import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search, Plane, Hotel, MapPin, Star, Shield, Headphones } from "lucide-react";
import { useState } from "react";
import { PACKAGES } from "@/lib/packages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "aztravelhub.net — Multi-City Travel Packages" },
      { name: "description", content: "Curated multi-city vacation packages with hotels, transfers and tours included. Book with aztravelhub.net." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = PACKAGES.slice(0, 6);
  const nav = useNavigate();
  const [dest, setDest] = useState("");

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-brand-dark text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-gold/20 text-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Multi-City Specialists
            </span>
            <h1 className="mt-4 text-4xl lg:text-6xl font-bold leading-tight">
              Your next great <span className="text-gold">journey</span> starts here
            </h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              Hand-crafted multi-city vacations across Europe, Asia, and Africa — flights, first-class hotels,
              high-speed rail, and expert local guides included.
            </p>
            <div className="mt-8 bg-white rounded-xl p-4 shadow-2xl text-foreground">
              <div className="grid sm:grid-cols-[1fr_auto] gap-3">
                <div className="flex items-center gap-3 px-3 py-2 border border-border rounded-md">
                  <MapPin className="h-5 w-5 text-brand shrink-0" />
                  <input
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    placeholder="Where do you want to go? (e.g. Italy, Japan, Greece)"
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </div>
                <button
                  onClick={() => nav({ to: "/packages", search: { q: dest } as never })}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand text-primary-foreground px-6 py-3 font-semibold hover:bg-brand-dark transition"
                >
                  <Search className="h-4 w-4" /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-6 grid sm:grid-cols-3 gap-4 text-sm">
          {[
            { icon: Shield, t: "Secure Booking", d: "SSL-encrypted checkout" },
            { icon: Star, t: "Curated Experiences", d: "Hand-picked itineraries" },
            { icon: Headphones, t: "24/7 Travel Support", d: "Real humans on call" },
          ].map((f) => (
            <div key={f.t} className="flex items-center gap-3">
              <f.icon className="h-6 w-6 text-brand" />
              <div>
                <div className="font-semibold">{f.t}</div>
                <div className="text-muted-foreground">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl">Featured Vacations</h2>
            <p className="mt-2 text-muted-foreground">Best-selling multi-city itineraries — book with confidence.</p>
          </div>
          <Link to="/packages" className="hidden sm:inline-flex text-sm font-semibold text-brand hover:underline">
            View all packages →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link
              key={p.id}
              to="/packages/$id"
              params={{ id: p.id }}
              className="group rounded-xl overflow-hidden border border-border bg-white hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={p.image} alt={p.name} loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-brand font-semibold">{p.destination}</div>
                <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{p.nights} nights</span>
                  <span className="text-foreground">
                    from <span className="text-xl font-bold text-brand">${p.price}</span>
                    <span className="text-muted-foreground"> /pp</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-[1440px] px-6 py-16">
          <h2 className="text-3xl lg:text-4xl text-center">Travel Your Way</h2>
          <p className="mt-2 text-center text-muted-foreground">Choose the style that fits your trip</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Plane, t: "Flight + Hotel", d: "Bundle and save" },
              { icon: Hotel, t: "Hotel Only", d: "Stay where you want" },
              { icon: MapPin, t: "Multi-City", d: "Two or more cities" },
              { icon: Star, t: "Escorted Tours", d: "Guided group travel" },
            ].map((c) => (
              <div key={c.t} className="rounded-xl bg-white p-6 border border-border hover:border-brand transition">
                <c.icon className="h-8 w-8 text-brand" />
                <h3 className="mt-4 font-semibold">{c.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-brand to-brand-dark text-primary-foreground p-10 lg:p-14 text-center">
          <h2 className="text-3xl lg:text-4xl">Ready for the trip of a lifetime?</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Browse our full catalog of curated packages and book in minutes.
          </p>
          <Link to="/packages" className="mt-6 inline-flex items-center rounded-md bg-gold text-gold-foreground px-6 py-3 font-semibold hover:opacity-90">
            Explore All Packages
          </Link>
        </div>
      </section>
    </div>
  );
}
