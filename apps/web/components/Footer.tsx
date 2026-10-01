export function Footer() {
  return (
    <>
      {/* CTA section — dark obsidian */}
      <section
        className="px-6 md:px-14 py-24 md:py-32 text-center rounded-[40px] mx-4 md:mx-8 mb-6"
        style={{ background: "#0A0E1A" }}
      >
        <h2
          className="text-[clamp(36px,6vw,72px)] font-black text-white leading-[0.95] mb-5"
          style={{ letterSpacing: "-0.04em" }}
        >
          Your first brick.<br />
          <span style={{ color: "#00D664" }}>Laid today.</span>
        </h2>
        <p className="text-[16px] text-white/60 mb-10 max-w-[440px] mx-auto font-medium">
          Join 12,000+ investors already earning from Indian real estate.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0">
          <button
            className="text-[15px] font-black px-10 py-4 rounded-full hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto shadow-lg"
            style={{ background: "#0EA5E9", color: "white" }}
          >
            Create your account
          </button>
          <button
            className="text-[15px] font-semibold px-8 py-4 rounded-full transition-colors cursor-pointer w-full sm:w-auto"
            style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1.5px solid rgba(255,255,255,0.15)" }}
          >
            Talk to an advisor
          </button>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="px-6 md:px-14 py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div
          className="text-[16px] font-black text-slate-900"
          style={{ letterSpacing: "-0.02em" }}
        >
          Ravi<span className="font-light text-slate-400">Capitals</span>
        </div>
        <div className="text-[12px] text-slate-400 leading-relaxed max-w-[480px] md:text-right">
          © 2026 Ravi Capitals Pvt. Ltd. Investments are subject to market risk. Please read all scheme-related documents carefully before investing. SEBI registration pending.
        </div>
      </footer>
    </>
  );
}
