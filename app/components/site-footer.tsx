import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer
      className="border-t border-brand-border/80 bg-white/80 backdrop-blur-md mt-16 pt-12 pb-8"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-brand-border/60 gap-6 text-center md:text-left">
          <Image
            alt="Oh My Dress Showroom"
            className="h-14 w-auto"
            src="/brand/logo.png"
            width={160}
            height={137}
          />
          <div className="text-xs text-brand-charcoal bg-brand-alabaster px-4 py-2.5 rounded-xl border border-brand-border/80 tracking-wide">
            Service client : lundi – vendredi, 9h – 17h
          </div>
        </div>
        <div className="py-6 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-xs tracking-wider uppercase text-brand-muted">
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Mentions légales
          </a>
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            CGV
          </a>
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Confidentialité
          </a>
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Livraison &amp; retours
          </a>
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Contact
          </a>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-muted border-t border-brand-border/40 gap-2">
          <p>© 2026 Oh My Dress Showroom — Tous droits réservés.</p>
          <p className="tracking-widest uppercase">Paris • Lyon • Bruxelles</p>
        </div>
      </div>
    </footer>
  );
}
