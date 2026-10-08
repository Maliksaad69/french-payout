export default function AnnouncementBar() {
  return (
    <div
      className="bg-[#1F1C1B] text-white py-2 px-4 text-xs tracking-widest text-center uppercase font-medium flex items-center justify-center gap-2"
      data-purpose="top-announcement"
    >
      <svg
        className="w-3.5 h-3.5 text-brand-gold shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <span>
        Boutique Officielle Live TikTok • Paiement 100% Sécurisé &amp; Expédition
        Express{" "}
        <span className="opacity-80">
          / Official TikTok Live Shop • 100% Secure Checkout
        </span>
      </span>
    </div>
  );
}
