import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Package = {
  id: string;
  name: string;
  destination: string;
  nights: number;
  price: number;
  image: string;
  description: string;
  highlights: string[];
};

export type CartItem = { pkg: Package; travelers: number };

type CartCtx = {
  items: CartItem[];
  add: (pkg: Package, travelers?: number) => void;
  remove: (id: string) => void;
  setTravelers: (id: string, n: number) => void;
  clear: () => void;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ath_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("ath_cart", JSON.stringify(items));
  }, [items]);

  const add = (pkg: Package, travelers = 2) =>
    setItems((p) => {
      const ex = p.find((i) => i.pkg.id === pkg.id);
      if (ex) return p.map((i) => (i.pkg.id === pkg.id ? { ...i, travelers: i.travelers + travelers } : i));
      return [...p, { pkg, travelers }];
    });
  const remove = (id: string) => setItems((p) => p.filter((i) => i.pkg.id !== id));
  const setTravelers = (id: string, n: number) =>
    setItems((p) => p.map((i) => (i.pkg.id === id ? { ...i, travelers: Math.max(1, n) } : i)));
  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.pkg.price * i.travelers, 0);

  return <Ctx.Provider value={{ items, add, remove, setTravelers, clear, total }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
