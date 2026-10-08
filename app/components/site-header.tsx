import Image from "next/image";

const LOGO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8K7r0BTU9bdNQt9vzj-lSnCarkvPWemGmVfwd12gSb3AF1M9Wlc-U5DJnG46275t4EfaApyzOTmOrZk6nJvuWS64wDBJp4-S2xbtrcv6k7FCmWU1vR82Ba5BW6gfJmAdepv6eC02a26aJ3NbSCPJvPZIz0RPYo_MTKRLlP9L6gm75wkEkC2trscLJFDX-3wsqbXKAvyFveNOrJ9jahg3y5HHxo7YS_JQKwPtiIuS4BwjqT2EvTMM3";

export default function SiteHeader() {
  return (
    <header className="border-b border-brand-border/60 bg-white/70 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        {/* Left side link / Return to boutique */}
        <div className="flex items-center space-x-3">
          <a
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wider text-brand-charcoal hover:text-brand-gold uppercase transition-colors duration-200"
            href="#"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              ></path>
            </svg>
            <span className="hidden sm:inline">
              Retour boutique / Back to shop
            </span>
            <span className="sm:hidden">Retour / Back</span>
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center justify-center">
          <a className="block group" href="#">
            <Image
              alt="Oh My Dress Showroom"
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src={LOGO_SRC}
              width={240}
              height={96}
              priority
            />
          </a>
        </div>

        {/* Right Side Actions & Security Badge */}
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center rounded-full border border-brand-border bg-white p-0.5 text-[11px] font-semibold text-brand-charcoal">
            <button
              type="button"
              className="rounded-full bg-brand-charcoal px-2.5 py-0.5 text-white"
            >
              FR
            </button>
            <span className="text-brand-muted px-0.5">/</span>
            <button
              type="button"
              className="rounded-full px-2 py-0.5 text-brand-muted hover:text-brand-charcoal transition-colors"
            >
              EN
            </button>
          </div>
          <a
            className="hidden md:inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium bg-brand-charcoal text-white hover:bg-brand-charcoal/90 px-3.5 py-1.5 rounded-full transition-all"
            href="#"
          >
            <span>Mes commandes / Orders</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </a>
          <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50/90 border border-emerald-200/60 px-2.5 py-1 rounded-full text-xs font-medium">
            <svg
              className="w-3.5 h-3.5 text-emerald-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span className="text-[11px] uppercase tracking-wider font-semibold">
              SSL 256-Bit
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
