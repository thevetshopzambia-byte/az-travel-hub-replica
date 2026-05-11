import type { Package } from "./cart";

export const PACKAGES: Package[] = [
  {
    id: "italy-classic",
    name: "Italy Classic",
    destination: "Rome • Florence • Venice",
    nights: 9,
    price: 1899,
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80",
    description:
      "Discover the soul of Italy across three iconic cities. Walk Roman ruins, savor Tuscan cuisine, and glide through Venetian canals.",
    highlights: ["First-class hotels", "High-speed rail between cities", "Daily breakfast", "Skip-the-line Vatican"],
  },
  {
    id: "spain-portugal",
    name: "Spain & Portugal",
    destination: "Madrid • Seville • Lisbon",
    nights: 10,
    price: 2099,
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80",
    description:
      "From flamenco nights in Seville to pastel-de-nata mornings in Lisbon — a vibrant Iberian journey.",
    highlights: ["Boutique hotels", "Tapas tour included", "Alfama walking tour", "AVE high-speed train"],
  },
  {
    id: "greek-islands",
    name: "Greek Islands Hopper",
    destination: "Athens • Mykonos • Santorini",
    nights: 8,
    price: 2299,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    description:
      "Whitewashed villages, Aegean sunsets, and ancient wonders. Ferry between islands on this signature itinerary.",
    highlights: ["Caldera-view rooms", "Acropolis private guide", "Inter-island ferries", "Sunset cruise"],
  },
  {
    id: "paris-london",
    name: "Paris & London",
    destination: "Paris • London",
    nights: 7,
    price: 1799,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    description:
      "Two world capitals, one unforgettable journey. Eurostar between cities and central hotels included.",
    highlights: ["Eurostar Standard Premier", "Louvre & British Museum entry", "4★ central hotels", "Hop-on hop-off bus"],
  },
  {
    id: "iceland-explorer",
    name: "Iceland Explorer",
    destination: "Reykjavík • Golden Circle • South Coast",
    nights: 6,
    price: 1999,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    description:
      "Glaciers, geysers, and Northern Lights chases. Self-drive or guided options across Iceland's wonders.",
    highlights: ["Blue Lagoon entry", "Glacier hike", "Northern Lights tour", "4WD rental option"],
  },
  {
    id: "japan-discovery",
    name: "Japan Discovery",
    destination: "Tokyo • Hakone • Kyoto",
    nights: 9,
    price: 2899,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    description:
      "Neon Tokyo, serene Kyoto temples, and Mt. Fuji views from a Hakone ryokan.",
    highlights: ["JR Pass 7-day", "Ryokan night with onsen", "Tea ceremony", "Sushi-making class"],
  },
  {
    id: "egypt-nile",
    name: "Egypt & Nile Cruise",
    destination: "Cairo • Luxor • Aswan",
    nights: 8,
    price: 2199,
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&q=80",
    description:
      "Pyramids of Giza, Valley of the Kings, and a 4-night Nile cruise through ancient wonders.",
    highlights: ["4-night Nile cruise", "Egyptologist guide", "Abu Simbel option", "All meals on cruise"],
  },
  {
    id: "safari-kenya",
    name: "Kenya Safari",
    destination: "Nairobi • Maasai Mara • Amboseli",
    nights: 7,
    price: 3299,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    description:
      "Witness the Great Migration and Big Five game drives across Kenya's most legendary parks.",
    highlights: ["Luxury tented camps", "Daily game drives", "All meals", "Park fees included"],
  },
];

export const getPackage = (id: string) => PACKAGES.find((p) => p.id === id);
