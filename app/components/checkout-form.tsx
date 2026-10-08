"use client";

import Image from "next/image";
import { useState } from "react";

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
        {/* Bannière */}
        <div className="mb-8 relative overflow-hidden rounded-2xl border border-brand-border/60 shadow-luxury-lg">
          <div className="relative w-full h-[340px] sm:h-[440px] md:h-[520px] lg:h-[580px] overflow-hidden">
            <Image
              alt="Oh My Dress Showroom"
              className="object-cover object-center"
              src="/brand/showroom.jpg"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#faf7f2]/85 from-5% via-[#faf7f2]/20 via-45% to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2]/60 via-transparent to-transparent"></div>
            <div className="absolute top-5 right-5 flex items-center gap-2 text-xs text-brand-charcoal bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/70 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium tracking-wide">En direct</span>
            </div>
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-xl">
              <p className="text-[11px] tracking-[0.35em] uppercase text-brand-gold-hover font-semibold">
                Showroom privé
              </p>
              <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-charcoal leading-[1.05] drop-shadow-[0_1px_14px_rgba(250,247,242,0.95)]">
                Finalisation de commande
              </h1>
              <p className="mt-3 text-sm sm:text-base text-brand-muted drop-shadow-[0_1px_10px_rgba(250,247,242,0.95)]">
                Paiement sécurisé de votre commande passée en direct.
              </p>
            </div>
          </div>
        </div>

        <nav className="mb-8 flex items-center justify-center sm:justify-start space-x-3 text-xs uppercase tracking-widest text-brand-muted">
          <span className="text-brand-charcoal font-medium">Panier</span>
          <span>/</span>
          <span className="text-brand-gold font-bold">Livraison</span>
          <span>/</span>
          <span>Confirmation</span>
        </nav>

        {/* Grid: Left side Form & Right side Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ======================= LEFT COLUMN: Forms ======================= */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section 1: Montant & référence */}
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
                    Montant &amp; référence
                  </h2>
                </div>
                <span className="text-xs uppercase text-brand-gold font-semibold tracking-wider">
                  Étape 1/3
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="montant-field"
                  >
                    Montant convenu en direct{" "}
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
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="order-ref"
                  >
                    Référence
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="order-ref"
                    name="order_reference"
                    placeholder="OMD-LIVE-4982"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="order-item"
                  >
                    Article{" "}
                    <span className="text-brand-muted font-normal lowercase">
                      (facultatif)
                    </span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="order-item"
                    name="article_name"
                    placeholder="Robe de soirée dorée — M"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="tiktok-user"
                  >
                    Pseudo TikTok <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-xl">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-brand-muted font-medium text-sm">
                      @
                    </div>
                    <input
                      className="lux-input block w-full rounded-xl py-3 pl-9 pr-4 text-sm text-brand-charcoal placeholder-gray-400"
                      id="tiktok-user"
                      name="tiktok_username"
                      placeholder="votre_pseudo"
                      required
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Adresse de livraison */}
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
                    Adresse de livraison
                  </h2>
                </div>
                <span className="text-xs uppercase text-brand-gold font-semibold tracking-wider">
                  Étape 2/3
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="md:col-span-2">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="email-addr"
                  >
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="email-addr"
                    name="email"
                    placeholder="nom@exemple.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="first-name"
                  >
                    Prénom <span className="text-red-500">*</span>
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
                    Nom <span className="text-red-500">*</span>
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
                    Pays <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal cursor-pointer"
                    id="country"
                    name="country"
                    defaultValue="FR"
                  >
                    <option value="FR">France métropolitaine</option>
                    <option value="BE">Belgique</option>
                    <option value="LU">Luxembourg</option>
                    <option value="DE">Allemagne</option>
                    <option value="ES">Espagne</option>
                    <option value="CH">Suisse</option>
                    <option value="GB">Royaume-Uni</option>
                    <option value="US">États-Unis</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="street-address"
                  >
                    Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="street-address"
                    name="address1"
                    placeholder="N° et nom de rue"
                    required
                    type="text"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="address2"
                  >
                    Complément{" "}
                    <span className="text-brand-muted font-normal lowercase">
                      (facultatif)
                    </span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="address2"
                    name="address2"
                    placeholder="Bâtiment, étage, interphone…"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                    htmlFor="postal-code"
                  >
                    Code postal <span className="text-red-500">*</span>
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
                    Ville <span className="text-red-500">*</span>
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
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-brand-charcoal placeholder-gray-400"
                    id="phone-number"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    required
                    type="tel"
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Mode de livraison (Mondial Relay) */}
            <section
              className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-brand-border/70 shadow-luxury backdrop-blur-sm"
              data-purpose="shipping-method-section"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-brand-border/60 mb-6">
                <span className="w-7 h-7 rounded-full bg-brand-alabaster border border-brand-gold/40 flex items-center justify-center text-xs font-semibold text-brand-charcoal">
                  3
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-charcoal">
                  Mode de livraison
                </h2>
              </div>
              <div className="mb-5 bg-[#FAF3E9] border border-[#E9D9C3] rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
                <span className="text-xl">🚚</span>
                <p className="text-xs sm:text-sm text-[#7D5E37] font-medium leading-relaxed">
                  <strong className="font-semibold text-brand-charcoal">
                    Offre spéciale :
                  </strong>{" "}
                  frais de port offerts dès la 2ᵉ commande groupée.
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
                        Mondial Relay — Point Relais
                      </label>
                      <p className="text-xs text-brand-muted mt-0.5">
                        3 à 5 jours ouvrés
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
                        Point relais automatique
                      </div>
                      <div className="text-[11px] text-brand-muted">
                        Le plus proche · modifiable par SMS
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-xs font-medium uppercase tracking-wider text-brand-charcoal underline hover:text-brand-gold transition self-start sm:self-auto"
                    type="button"
                  >
                    Changer
                  </button>
                </div>
              </div>
            </section>

            {/* Section 4: Paiement */}
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
                    Paiement
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
                    <span>Carte bancaire</span>
                    <span className="text-brand-gold text-xs font-normal">
                      3D Secure
                    </span>
                  </label>
                </div>
                <div className="space-y-4 pt-2">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                      htmlFor="card-holder"
                    >
                      Nom sur la carte
                    </label>
                    <input
                      className="lux-input block w-full rounded-xl py-3 px-4 text-sm uppercase placeholder-gray-400"
                      id="card-holder"
                      name="cardholder"
                      placeholder="MME CAMILLE LAURENT"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5"
                      htmlFor="card-num"
                    >
                      Numéro de carte
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
                        Expiration
                      </label>
                      <input
                        className="lux-input block w-full rounded-xl py-3 px-4 text-sm text-center placeholder-gray-400"
                        id="card-expiry"
                        maxLength={5}
                        name="expiry"
                        placeholder="MM / AA"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider font-semibold text-brand-charcoal mb-1.5 flex items-center justify-between"
                        htmlFor="card-cvc"
                      >
                        <span>CVC</span>
                        <span className="text-[10px] text-brand-muted font-normal">
                          3 chiffres au dos
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
                      J&apos;accepte les{" "}
                      <a
                        className="underline text-brand-charcoal hover:text-brand-gold"
                        href="#"
                      >
                        conditions générales de vente
                      </a>
                      .
                    </span>
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* ======================= RIGHT COLUMN: Récapitulatif (Sticky) ======================= */}
          <aside className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div
              className="bg-white/95 rounded-2xl p-6 sm:p-8 shadow-luxury-lg border border-brand-border/90 backdrop-blur-md"
              data-purpose="payment-summary-card"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-charcoal pb-4 border-b border-brand-border/70">
                Récapitulatif
              </h2>
              <div className="py-5 space-y-3.5 text-sm">
                <div className="flex items-center justify-between text-brand-muted">
                  <span>Sous-total</span>
                  <span className="font-medium text-brand-charcoal">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-brand-muted">
                  <div className="flex items-center gap-1.5">
                    <span>Livraison</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-alabaster text-brand-muted border border-brand-border">
                      3-5 j
                    </span>
                  </div>
                  <span className="font-medium text-brand-charcoal">
                    {formatPrice(SHIPPING_COST)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-brand-muted text-xs">
                  <span>TVA incluse (20 %)</span>
                  <span>{formatPrice(vat)}</span>
                </div>
                <div className="pt-4 border-t border-brand-border/70">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal">
                      Total TTC
                    </span>
                    <span className="font-serif text-3xl font-extrabold text-brand-charcoal">
                      {formatPrice(total)}
                    </span>
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
                  <span>Payer • {formatPrice(total)}</span>
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
                  <strong className="text-xs font-semibold text-brand-charcoal">
                    Paiement sécurisé
                  </strong>
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
                  <strong className="text-xs font-semibold text-brand-charcoal">
                    Envoi sous 24–48 h
                  </strong>
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
                  <strong className="text-xs font-semibold text-brand-charcoal">
                    Service client réactif
                  </strong>
                </div>
              </div>
            </div>

            {/* Note service client */}
            <div className="bg-brand-pearl/40 rounded-xl p-4 border border-brand-border/60 text-center text-xs text-brand-muted">
              Une question sur votre commande ? Écrivez-nous sur TikTok.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
