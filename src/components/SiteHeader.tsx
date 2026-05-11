import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);
  const count = items.reduce((s, i) => s + i.travelers, 0);

  const links = [
    { to: "/", label: "Home" },
    { to: "/packages", label: "Packages" },
    { to: "/destinations", label: "Destinations" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 py-3 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="aztravelhub.net" className="h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-brand font-semibold" }}
              className="text-sm font-medium text-foreground hover:text-brand transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-md bg-brand text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-brand-dark transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="ml-1 inline-flex items-center justify-center rounded-full bg-gold text-gold-foreground text-xs font-bold h-5 min-w-5 px-1">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-white px-6 py-3 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
