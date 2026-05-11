import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PACKAGES } from "@/lib/packages";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "All Travel Packages — aztravelhub.net" },
      { name: "description", content: "Browse all curated multi-city travel packages from aztravelhub.net." },
    ],
  }),
  component: PackagesList,
});

function PackagesList() {
  const [q, setQ] = useState("");
  const filtered = PACKAGES.filter(
    (p) =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.destination.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl lg:text-4xl">All Packages</h1>
          <p className="mt-2 text-muted-foreground">{filtered.length} curated itineraries</p>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search destinations..."
          className="px-4 py-2 border border-border rounded-md text-sm sm:w-72 outline-none focus:border-brand"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <Link
            key={p.id}
            to="/packages/$id"
            params={{ id: p.id }}
            className="group rounded-xl overflow-hidden border border-border bg-white hover:shadow-xl transition"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img src={p.image} alt={p.name} loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-wider text-brand font-semibold">{p.destination}</div>
              <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{p.nights} nights</span>
                <span className="text-foreground">
                  from <span className="text-xl font-bold text-brand">${p.price}</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
