import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — aztravelhub.net" },
      { name: "description", content: "Explore our most popular travel destinations across Europe, Asia, and Africa." },
    ],
  }),
  component: Destinations,
});

const REGIONS = [
  { name: "Europe", countries: ["Italy", "Spain", "Portugal", "Greece", "France", "United Kingdom", "Iceland"], image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80" },
  { name: "Asia", countries: ["Japan", "Thailand", "Vietnam", "Indonesia"], image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200&q=80" },
  { name: "Africa", countries: ["Egypt", "Kenya", "Tanzania", "Morocco", "South Africa"], image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80" },
];

function Destinations() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-12">
      <h1 className="text-3xl lg:text-4xl">Destinations</h1>
      <p className="mt-2 text-muted-foreground">Where will your next journey take you?</p>
      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        {REGIONS.map((r) => (
          <article key={r.name} className="rounded-xl overflow-hidden border border-border bg-white">
            <div className="aspect-[4/3] bg-secondary overflow-hidden">
              <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{r.name}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {r.countries.map((c) => (
                  <li key={c} className="text-xs px-2.5 py-1 rounded-full bg-secondary">{c}</li>
                ))}
              </ul>
              <Link to="/packages" className="mt-5 inline-block text-brand font-semibold hover:underline">
                Browse {r.name} packages →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
