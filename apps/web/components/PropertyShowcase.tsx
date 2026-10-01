"use client";

const CARDS = [
  {
    id: "bengaluru",
    city: "Bengaluru",
    title: "Prestige Tech Park",
    subtitle: "Block C — Whitefield · Grade A Office",
    yield: "10.8%",
    payout: "₹4,320/mo",
    progress: 78,
    filled: "78% Funded",
    badge: "ICICI TRUSTEE PROTECTED",
    tag: "COMMERCIAL",
    accent: "#00D664",
    gradient: "linear-gradient(160deg, #0d1f3c 0%, #0A0E1A 55%, #091a10 100%)",
    highlight: "#00D664",
    irr: "10.8% Target IRR",
    minInvest: "From ₹5,000",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    title: "BKC Prime Logistics",
    subtitle: "Bandra Kurla Complex · Warehouse Hub",
    yield: "12.1%",
    payout: "₹6,012/mo",
    progress: 62,
    filled: "62% Funded",
    badge: "MONTHLY RENTAL GUARANTEE",
    tag: "LOGISTICS",
    accent: "#38BDF8",
    gradient: "linear-gradient(160deg, #0d1a3c 0%, #0A0E1A 55%, #050b1f 100%)",
    highlight: "#60a5fa",
    irr: "12.1% Target IRR",
    minInvest: "From ₹10,000",
    elevated: true,
  },
  {
    id: "gurugram",
    city: "Gurugram",
    title: "CyberCity Phase IV",
    subtitle: "DLF Cyber City · Tech Park Office",
    yield: "12.4%",
    payout: "₹5,180/mo",
    progress: 45,
    filled: "45% Funded",
    badge: "SEBI COMPLIANT TRUSTEE",
    tag: "TECH PARK",
    accent: "#a78bfa",
    gradient: "linear-gradient(160deg, #1a0d3c 0%, #0A0E1A 55%, #0f0a20 100%)",
    highlight: "#a78bfa",
    irr: "12.4% Target IRR",
    minInvest: "From ₹5,000",
  },
];

function PropertyCard({ card, elevated }: { card: typeof CARDS[0]; elevated?: boolean }) {
  return (
    <div
      className={`relative rounded-[32px] overflow-hidden flex flex-col h-[460px] sm:h-[500px] lg:h-[520px] shadow-2xl transition-transform duration-300 hover:-translate-y-2 ${elevated ? "lg:-translate-y-6 lg:shadow-[0_40px_80px_rgba(0,0,0,0.25)]" : ""}`}
      style={{ background: card.gradient }}
    >
      {/* Top section: visual area */}
      <div className="relative flex-1 overflow-hidden">
        {/* Geometric background art */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 70% 30%, ${card.accent}22 0%, transparent 65%)`,
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${card.accent}40 1px, transparent 1px), linear-gradient(90deg, ${card.accent}40 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Tag pill */}
        <div className="absolute top-5 left-5 z-10">
          <span
            className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border"
            style={{
              color: card.accent,
              background: `${card.accent}18`,
              borderColor: `${card.accent}40`,
            }}
          >
            {card.tag}
          </span>
        </div>

        {/* Yield badge top-right */}
        <div className="absolute top-5 right-5 z-10">
          <span
            className="text-[13px] font-black px-3 py-1.5 rounded-full"
            style={{ background: card.accent, color: "#0A0E1A" }}
          >
            {card.yield} Yield
          </span>
        </div>

        {/* City name watermark */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[52px] font-black opacity-[0.04] whitespace-nowrap pointer-events-none select-none"
          style={{ color: "white", letterSpacing: "-0.04em" }}
        >
          {card.city}
        </div>

        {/* Center stat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-2">
            Monthly Payout
          </div>
          <div
            className="font-black text-white leading-none"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-0.04em" }}
          >
            {card.payout}
          </div>
          <div className="text-[12px] text-white/50 mt-1.5">{card.minInvest}</div>

          {/* Progress bar */}
          <div className="w-full mt-6 px-2">
            <div className="flex justify-between text-[10px] text-white/40 mb-1.5">
              <span>{card.filled}</span>
              <span>{card.irr}</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div
                className="h-1.5 rounded-full transition-all"
                style={{ width: `${card.progress}%`, background: card.accent }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: trust badge */}
      <div
        className="px-5 py-4 border-t flex items-center justify-between gap-3"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: `${card.accent}20`, border: `1px solid ${card.accent}40` }}
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
              <path d="M8 1L2 4v4c0 3.3 2.5 6.4 6 7.2C11.5 14.4 14 11.3 14 8V4L8 1z" stroke={card.accent} strokeWidth="1.5" fill={`${card.accent}20`} />
              <path d="M5.5 8l2 2 3-3" stroke={card.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
            {card.badge}
          </span>
        </div>
        <button
          className="text-[11px] font-black px-4 py-2 rounded-full transition-all hover:opacity-90 active:scale-95 whitespace-nowrap"
          style={{ background: card.accent, color: "#0A0E1A" }}
        >
          Invest →
        </button>
      </div>
    </div>
  );
}

export function PropertyShowcase() {
  return (
    <div
      className="relative z-20 canvas-section"
      style={{
        borderRadius: "48px 48px 0 0",
        marginTop: "-48px",
        boxShadow: "0 -20px 60px rgba(0,0,0,0.08)",
      }}
    >
      <div className="pt-20 pb-28 px-6 md:px-14 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-[11px] font-black uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6"
            style={{ background: "#E5E7EB", color: "#374151" }}
          >
            Curated Assets
          </span>
          <h2
            className="text-[clamp(36px,5vw,64px)] font-black text-slate-900 leading-[0.95] mb-5"
            style={{ letterSpacing: "-0.03em" }}
          >
            Your wealth,<br />
            <span style={{ color: "#52C5EA" }}>reimagined.</span>
          </h2>
          <p className="text-[16px] text-slate-500 leading-relaxed max-w-[560px] mx-auto font-medium">
            Pre-leased commercial hubs, warehousing, and Grade-A tech parks with guaranteed rental payouts directly to your bank account.
          </p>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-[1100px] mx-auto items-end">
          {CARDS.map((card) => (
            <PropertyCard key={card.id} card={card} elevated={card.elevated} />
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <a
            href="#properties"
            className="px-8 py-4 rounded-full text-[15px] font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{ background: "#52C5EA" }}
          >
            Browse all properties
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-full text-[15px] font-semibold transition-all hover:bg-slate-100"
            style={{ color: "#374151", border: "1.5px solid #E5E7EB" }}
          >
            How it works →
          </a>
        </div>
      </div>
    </div>
  );
}
