import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-primary-foreground mt-20">
      <div className="mx-auto max-w-[1440px] px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="aztravelhub.net" className="h-14 w-auto bg-white/95 rounded-md p-2" />
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            Curated multi-city travel packages with first-class hotels, transfers, and trusted local guides.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/packages" className="hover:text-gold">All Packages</Link></li>
            <li><Link to="/destinations" className="hover:text-gold">Destinations</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/legal/notice" className="hover:text-gold">Legal Notice</Link></li>
            <li><Link to="/legal/privacy" className="hover:text-gold">Data Privacy</Link></li>
            <li><Link to="/legal/system-policies" className="hover:text-gold">System Policies</Link></li>
            <li><Link to="/legal/terms" className="hover:text-gold">Terms and Conditions</Link></li>
            <li><Link to="/legal/refund" className="hover:text-gold">Refund Policy</Link></li>
            <li><Link to="/legal/abuse" className="hover:text-gold">Abuse Form</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">AZ Travel Hub Limited</h4>
          <address className="not-italic text-sm text-white/80 leading-relaxed">
            Agora Village<br />
            Thabo Mbeki Road<br />
            Lusaka<br />
            Reg No 120261043371
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} aztravelhub.net — AZ Travel Hub Limited. All rights reserved.</p>
          <p>All prices in US Dollars ($).</p>
        </div>
      </div>
    </footer>
  );
}
