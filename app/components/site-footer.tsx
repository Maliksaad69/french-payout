import Image from "next/image";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQqcr2LjKqzNkCvNcYiHr_h0z0nVGEyMS_0ykm9biazAzyoilMlLmaIf-5hV3jUT4-rSeuNk9priWCBtKGAA5FGv3G1BHi1_TRl0BcRaPTiVdok5w7oc5ooyLwRCwq5xAHAE2n8G-aB6p3zXK4UMD4pZa33kznvhGjRQRFasHrKn0EZEHXq33xu8JanPa5ed4u-KFqz9kWewZgFuhRSgen7H59ZU6as58rk_SCgnqehEvEDboARVek";

export default function SiteFooter() {
  return (
    <footer
      className="border-t border-brand-border/80 bg-white/80 backdrop-blur-md mt-16 pt-12 pb-8"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-brand-border/60 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <Image
              alt="Oh My Dress Showroom"
              className="h-10 w-auto opacity-80"
              src={LOGO_SRC}
              width={140}
              height={56}
            />
            <span className="text-xs text-brand-muted max-w-sm">
              Showroom haute couture &amp; prêt-à-porter exclusif. Ventes
              exclusives lors de nos sessions live officielles / Exclusive
              showroom live shopping experiences.
            </span>
          </div>
          <div className="text-xs text-brand-charcoal bg-brand-alabaster px-4 py-2.5 rounded-xl border border-brand-border/80">
            <span className="font-semibold block sm:inline">
              Service Client / Customer Service :{" "}
            </span>
            <span className="text-brand-muted">
              Du lundi au vendredi de 9h à 17h / Mon–Fri 9am–5pm.
            </span>
          </div>
        </div>
        <div className="py-6 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-xs tracking-wider uppercase text-brand-muted">
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Mentions Légales / Legal Notice
          </a>
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Conditions Générales de Vente / Terms
          </a>
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Politique de Confidentialité / Privacy
          </a>
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Expédition &amp; Retours / Shipping &amp; Returns
          </a>
          <a className="hover:text-brand-charcoal transition-colors" href="#">
            Contactez-nous / Contact Us
          </a>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-muted border-t border-brand-border/40 gap-2">
          <p>
            © 2026 Oh My Dress Showroom. Tous droits réservés / All rights
            reserved.
          </p>
          <p className="tracking-widest uppercase">Paris • Lyon • Bruxelles</p>
        </div>
      </div>
    </footer>
  );
}
