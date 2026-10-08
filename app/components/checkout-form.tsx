"use client";

import Image from "next/image";
import { useState } from "react";

const HERO_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHDedPwS3c2QKAdN6m0IdcFIhn2v6nYnlT1AIKClcj8EWk6EQ6EdLC_U4GMLxWh1Y3-HTP-7WweuR_4aCOOkwLr2vbl8i2wX4616L--PTAtLnDhNgwkQ-_NEGAANLL6-gYkF_bIxWaZBsfNgq5TizrujV5KoPwpAoZnEXj6iUrMfzwLxOWzAzpZm0NLkho9kr-O2u2DMOc1yBtwToKIt9sCFR-a185vXVtVjranOrcRpDuvtO01hm";

const SHIPPING_COST = 5.0;

function formatPrice(value: number) {
  return (
    value.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €"
  );
}

export default function CheckoutForm() {
  // Live amount agreed during the TikTok live — drives the order summary.
  const [amount, setAmount] = useState("");

  const subtotal = parseFloat(amount) || 0;
  const total = subtotal + SHIPPING_COST;
  const vat = (total * 0.2) / 1.2; // 20% TVA incluse

  return (
    <main className="flex-grow py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero / Flow Indicator banner */}
        <div className="mb-8 relative overflow-hidden rounded-2xl border border-brand-border/80 shadow-luxury-lg bg-brand-alabaster group">
          <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
            <Image
              alt="Oh My Dress Showroom"
              className="object-cover object-center transform duration-700 group-hover:scale-105"
              src={HERO_SRC}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-sm">
                  Showroom Privé • Live Checkout
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-medium tracking-wide">
                  Session Live Active
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/90 shadow-luxury max-w-2xl">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-charcoal drop-shadow-sm leading-tight">
                  Finalisation de Commande{" "}
                  <span className="block sm:inline text-base sm:text-xl md:text-2xl font-normal text-brand-muted">
                    / Live Order Checkout
                  </span>
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-brand-muted">
                  Paiement sécurisé de vos pièces sélectionnées en direct lors
                  de notre vente exclusive TikTok.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="mb-8 flex items-center justify-center sm:justify-start space-x-3 text-xs uppercase tracking-widest text-brand-muted">
          <span className="text-brand-charcoal font-medium">
            1. Panier / Cart
          </span>
          <span>/</span>
          <span className="text-brand-gold font-bold">
            2. Coordonnées &amp; Livraison / Details &amp; Shipping
          </span>
          <span>/</span>
          <span>3. Confirmation</span>
        </nav>

        {/* Grid: Left side Form & Right side Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ======================= LEFT COLUMN: Forms ======================= */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section 1: Montant total & Infos Commande */}
            <section
              className="bg-white/95 rounded-2xl p-6 sm:p-8 shadow-luxury border border-brand-border/70 backdrop-blur-sm"
              data-purpose="order-details-section"
            >
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-alabaster border border-brand-gold/40 flex items-center justify-center text-xs font-semibold text-brand-charcoal">
                    1
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-charcoal">
                    Montant total &amp; Références{" "}
                    <span className="text-lg md:text-xl font-normal text-brand-muted">
                      / Total Amount &amp; References
                    </span>
                  </h2>
                </div>
                <span className="text-xs uppercase text-brand-gold font-semibold tracking-wider">
                  Étape / Step 1/3
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="montant-field"
                  >
                    Montant convenu en live / Agreed live amount{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <input
                      className="lux-input block w-full rounded-xl py-3.5 pl-4 pr-12 text-lg font-medium text-brand-charcoal placeholder-gray-400 focus:border-brand-gold"
                      id="montant-field"
                      min="0"
                      name="amount"
                      placeholder="0.00"
                      required
                      step="0.01"
                      type="number"
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <span className="text-lg font-serif font-bold text-brand-charcoal">
                        €
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] text-brand-muted">
                    Indiquez le montant validé lors du live TikTok avec la
                    vendeuse / Enter the amount agreed during TikTok live.
                  </p>
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="order-ref"
                  >
                    Référence de commande / Order reference
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="order-ref"
                    name="order_reference"
                    placeholder="Ex : OMD-LIVE-4982"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="order-item"
                  >
                    Article commandé / Ordered item{" "}
                    <span className="text-brand-muted font-normal lowercase">
                      (facultatif / optional)
                    </span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="order-item"
                    name="article_name"
                    placeholder="Ex : Robe de soirée dorée / Golden evening dress - M"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="tiktok-user"
                  >
                    Nom d&apos;utilisateur TikTok / TikTok username{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-xl">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-brand-muted font-medium text-sm">
                      @
                    </div>
                    <input
                      className="lux-input block w-full rounded-xl py-3 pl-9 pr-4 text-sm text-brand-charcoal placeholder-gray-400"
                      id="tiktok-user"
                      name="tiktok_username"
                      placeholder="votre_pseudo_tiktok / your_tiktok_handle"
                      required
                      type="text"
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-brand-muted">
                    Permet à notre équipe d&apos;identifier instantanément votre
                    panier du live / Helps our team match your live cart
                    instantly.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Shipping Address */}
            <section
              className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-brand-border/70 shadow-luxury backdrop-blur-sm"
              data-purpose="shipping-address-section"
            >
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-alabaster border border-brand-gold/40 flex items-center justify-center text-xs font-semibold text-brand-charcoal">
                    2
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-charcoal">
                    Adresse de livraison{" "}
                    <span className="text-lg md:text-xl font-normal text-brand-muted">
                      / Shipping Address
                    </span>
                  </h2>
                </div>
                <span className="text-xs uppercase text-brand-gold font-semibold tracking-wider">
                  Étape / Step 2/3
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="md:col-span-2">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="email-addr"
                  >
                    Adresse e-mail / Email address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="email-addr"
                    name="email"
                    placeholder="nom@exemple.com / name@example.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="first-name"
                  >
                    Prénom / First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="first-name"
                    name="firstname"
                    placeholder="Camille"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="last-name"
                  >
                    Nom / Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="last-name"
                    name="lastname"
                    placeholder="Laurent"
                    required
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="country"
                  >
                    Pays / Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal cursor-pointer"
                    id="country"
                    name="country"
                    defaultValue="FR"
                  >
                    <option value="FR">France métropolitaine</option>
                    <option value="BE">Belgique / Belgium</option>
                    <option value="LU">Luxembourg</option>
                    <option value="DE">Allemagne / Germany</option>
                    <option value="ES">Espagne / Spain</option>
                    <option value="CH">Suisse / Switzerland</option>
                    <option value="GB">
                      Royaume-Uni / United Kingdom
                    </option>
                    <option value="US">États-Unis / United States</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="street-address"
                  >
                    Adresse postale / Street address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="street-address"
                    name="address1"
                    placeholder="Numéro et nom de rue / Street name and number"
                    required
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="address2"
                  >
                    Complément d&apos;adresse / Apartment, suite, etc.{" "}
                    <span className="text-brand-muted font-normal lowercase">
                      (facultatif / optional)
                    </span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="address2"
                    name="address2"
                    placeholder="Appartement, bâtiment, interphone... / Apt, floor, building"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="postal-code"
                  >
                    Code postal / Postal code{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="postal-code"
                    name="zip"
                    placeholder="75008"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="city"
                  >
                    Ville / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="city"
                    name="city"
                    placeholder="Paris"
                    required
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="phone-number"
                  >
                    Numéro de portable / Phone number{" "}
                    <span className="text-brand-muted font-normal text-[11px]">
                      (pour notification SMS / for SMS alerts)
                    </span>{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="phone-number"
                    name="phone"
                    placeholder="06 12 34 56 78 / +33 6..."
                    required
                    type="tel"
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Delivery Method (Mondial Relay) */}
            <section
              className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-brand-border/70 shadow-luxury backdrop-blur-sm"
              data-purpose="shipping-method-section"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-brand-border/60 mb-6">
                <span className="w-7 h-7 rounded-full bg-brand-alabaster border border-brand-gold/40 flex items-center justify-center text-xs font-semibold text-brand-charcoal">
                  3
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-charcoal">
                  Mode de livraison{" "}
                  <span className="text-lg md:text-xl font-normal text-brand-muted">
                    / Shipping Method
                  </span>
                </h2>
              </div>
              <div className="mb-5 bg-[#FAF3E9] border border-[#E9D9C3] rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
                <span className="text-xl">🚚</span>
                <p className="text-xs sm:text-sm text-[#7D5E37] font-medium leading-relaxed">
                  <strong className="font-semibold text-brand-charcoal">
                    Offre Spéciale Live / Live Special :
                  </strong>{" "}
                  Frais de port offerts dès la 2ème commande groupée durant ce
                  live ! / Free shipping on grouped orders during this live!
                </p>
              </div>
              <div className="relative border-2 border-brand-gold/80 bg-brand-cream/40 rounded-xl p-4 sm:p-5 flex flex-col gap-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <input
                      defaultChecked
                      className="mt-1 h-4 w-4 text-brand-charcoal border-gray-300 focus:ring-brand-gold custom-radio"
                      id="relay-option"
                      name="shipping_method"
                      type="radio"
                      value="mondial_relay"
                    />
                    <div>
                      <label
                        className="font-semibold text-base text-brand-charcoal block cursor-pointer"
                        htmlFor="relay-option"
                      >
                        Mondial Relay - En Point Relais &amp; Locker / Pick-up
                        Point &amp; Locker
                      </label>
                      <p className="text-xs text-brand-muted mt-0.5">
                        Délai estimé : 3 à 5 jours ouvrés / Estimated delivery:
                        3 to 5 business days
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-lg font-bold text-brand-charcoal">
                      5,00 € TTC
                    </span>
                  </div>
                </div>
                <div className="pt-3 border-t border-brand-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-lg border">
                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-5 h-5 text-brand-gold flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <div>
                      <div className="text-xs font-semibold text-brand-charcoal">
                        Point Relais sélectionné automatiquement /
                        Auto-selected pick-up point
                      </div>
                      <div className="text-[11px] text-brand-muted">
                        Le plus proche de votre adresse (modifiable par SMS) /
                        Nearest location (modifiable via SMS)
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-xs font-medium uppercase tracking-wider text-brand-charcoal underline hover:text-brand-gold transition self-start sm:self-auto"
                    type="button"
                  >
                    Changer de point relais / Change pick-up point
                  </button>
                </div>
              </div>
            </section>

            {/* Section 4: Payment Details */}
            <section
              className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-brand-border/70 shadow-luxury backdrop-blur-sm"
              data-purpose="payment-section"
            >
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-charcoal text-white flex items-center justify-center text-xs font-semibold">
                    4
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-charcoal">
                    Mode de paiement{" "}
                    <span className="text-lg md:text-xl font-normal text-brand-muted">
                      / Payment Method
                    </span>
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-gray-100 text-gray-700 border border-gray-200">
                    CB
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#1A1F71] text-white">
                    VISA
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#EB001B] text-white">
                    MC
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-black text-white">
                    APPLE
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-brand-cream/60 rounded-xl border border-brand-border/60">
                  <input
                    defaultChecked
                    className="h-4 w-4 text-brand-charcoal custom-radio"
                    id="pay-card"
                    name="payment_method"
                    type="radio"
                  />
                  <label
                    className="text-xs sm:text-sm font-semibold text-brand-charcoal flex items-center justify-between w-full cursor-pointer"
                    htmlFor="pay-card"
                  >
                    <span>
                      Carte bancaire / Credit Card (Visa, Mastercard)
                    </span>
                    <span className="text-brand-gold text-xs font-normal">
                      Chiffrement 3D Secure
                    </span>
                  </label>
                </div>
                <div className="space-y-4 pt-2">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                      htmlFor="card-holder"
                    >
                      Nom inscrit sur la carte / Name on card
                    </label>
                    <input
                      className="lux-input block w-full rounded-xl py-3 px-4 text-sm uppercase placeholder-gray-400"
                      id="card-holder"
                      name="cardholder"
                      placeholder="MME CAMILLE LAURENT / JANE DOE"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                      htmlFor="card-num"
                    >
                      Numéro de carte de paiement / Card number
                    </label>
                    <div className="relative">
                      <input
                        className="lux-input block w-full rounded-xl py-3 pl-4 pr-11 text-sm tracking-widest placeholder-gray-400 font-mono"
                        id="card-num"
                        inputMode="numeric"
                        maxLength={19}
                        name="cardnumber"
                        placeholder="4970 •••• •••• ••••"
                        type="text"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            height="14"
                            rx="2"
                            strokeWidth="1.8"
                            width="20"
                            x="2"
                            y="5"
                          ></rect>
                          <path
                            d="M2 10h20"
                            strokeLinecap="round"
                            strokeWidth="1.8"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                        htmlFor="card-expiry"
                      >
                        Date d&apos;expiration / Expiration
                      </label>
                      <input
                        className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-center placeholder-gray-400"
                        id="card-expiry"
                        maxLength={5}
                        name="expiry"
                        placeholder="MM / AA (MM / YY)"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5 flex items-center justify-between"
                        htmlFor="card-cvc"
                      >
                        <span>Code CVC / CVC Code</span>
                        <span className="text-[10px] text-brand-muted font-normal">
                          3 chiffres au dos / 3 digits
                        </span>
                      </label>
                      <input
                        className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-center placeholder-gray-400 font-mono"
                        id="card-cvc"
                        maxLength={4}
                        name="cvc"
                        placeholder="123"
                        type="password"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-brand-border/60">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      defaultChecked
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-charcoal focus:ring-brand-gold custom-radio"
                      id="terms-check"
                      name="terms"
                      type="checkbox"
                    />
                    <span className="text-xs text-brand-muted leading-relaxed">
                      J&apos;accepte sans réserve les{" "}
                      <a
                        className="underline text-brand-charcoal hover:text-brand-gold"
                        href="#"
                      >
                        conditions générales de vente
                      </a>{" "}
                      et confirme avoir vérifié l&apos;exactitude des
                      informations fournies lors du live. / I agree to the{" "}
                      <a
                        className="underline text-brand-charcoal hover:text-brand-gold"
                        href="#"
                      >
                        terms and conditions
                      </a>{" "}
                      and confirm the accuracy of information provided during
                      the live.
                    </span>
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* ======================= RIGHT COLUMN: Order Summary (Sticky) ======================= */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div
              className="bg-white/95 rounded-2xl p-6 sm:p-8 shadow-luxury-lg border border-brand-border/90 backdrop-blur-md"
              data-purpose="payment-summary-card"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-charcoal pb-4 border-b border-brand-border/70">
                Récapitulatif du paiement{" "}
                <span className="text-lg font-normal text-brand-muted">
                  / Order Summary
                </span>
              </h2>
              <div className="py-5 space-y-3.5 text-sm">
                <div className="flex items-center justify-between text-brand-muted">
                  <span>Sous-total articles / Items subtotal</span>
                  <span className="font-medium text-brand-charcoal">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-brand-muted">
                  <div className="flex items-center gap-1.5">
                    <span>Livraison Mondial Relay / Shipping</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-alabaster text-brand-muted border border-brand-border">
                      3-5 j
                    </span>
                  </div>
                  <span className="font-medium text-brand-charcoal">
                    {formatPrice(SHIPPING_COST)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-brand-muted text-xs">
                  <span>TVA incluse (20%) / VAT included</span>
                  <span>{formatPrice(vat)}</span>
                </div>
                <div className="pt-4 border-t border-brand-border/70">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal block">
                        Total TTC / Total
                      </span>
                      <span className="text-[11px] text-brand-muted uppercase tracking-wider">
                        Paiement sécurisé / Instant secure payment
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-3xl font-extrabold text-brand-charcoal">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="w-full bg-[#1F1C1B] hover:bg-brand-gold text-white font-medium text-sm sm:text-base tracking-widest uppercase py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform active:scale-[0.99] flex items-center justify-center gap-3 group"
                  id="btn-submit-payment"
                  type="button"
                >
                  <svg
                    className="w-4 h-4 text-brand-gold group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span>
                    Payer maintenant / Pay Now • {formatPrice(total)}
                  </span>
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-brand-border/60 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-alabaster flex items-center justify-center text-brand-gold shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-xs">
                    <strong className="font-semibold text-brand-charcoal block">
                      Paiement 100% Sécurisé / 100% Secure Payment
                    </strong>
                    <span className="text-brand-muted">
                      Protocole 3-D Secure avec vérification bancaire /
                      3D-Secure certified.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-alabaster flex items-center justify-center text-brand-gold shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-xs">
                    <strong className="font-semibold text-brand-charcoal block">
                      Envoi soigné sous 24h à 48h / Dispatched in 24-48h
                    </strong>
                    <span className="text-brand-muted">
                      Colis confectionnés dans notre showroom / Prepared with
                      care in our showroom.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-alabaster flex items-center justify-center text-brand-gold shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-xs">
                    <strong className="font-semibold text-brand-charcoal block">
                      Service Client Réactif / Responsive Support
                    </strong>
                    <span className="text-brand-muted">
                      Assistance directe via TikTok DM ou email / Direct live
                      chat or email.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Service Note Card */}
            <div className="bg-brand-pearl/40 rounded-xl p-4 border border-brand-border/60 text-center text-xs text-brand-muted">
              <p>
                Une question concernant votre commande en cours de direct ? /
                Question about your live order?
              </p>
              <p className="mt-1 font-medium text-brand-charcoal">
                Écrivez-nous en direct sur TikTok ou via notre formulaire de
                contact / Contact us directly via TikTok DM or contact form.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
