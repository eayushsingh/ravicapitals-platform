export function Footer() {
  return (
    <>
      <section className="px-12 py-28 text-center border-t border-white-12">
        <h2 className="text-[clamp(40px,6vw,76px)] font-extrabold tracking-tight text-white leading-none mb-5">
          Your first brick.<br />Laid today.
        </h2>
        <p className="text-base text-white-55 mb-11">
          Join 12,000+ investors already earning from Indian real estate.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="bg-white text-brand-blue-deep text-[15px] font-bold px-10 py-4 rounded-md hover:-translate-y-0.5 transition-all cursor-pointer">
            Create your account
          </button>
          <button className="bg-transparent border border-white-30 text-white text-[15px] font-medium px-7 py-4 rounded-md hover:bg-white-12 transition-colors cursor-pointer">
            Talk to an advisor
          </button>
        </div>
      </section>

      <footer className="px-12 py-7 border-t border-white-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm font-semibold text-white/40">Ravi Capitals</div>
        <div className="text-xs text-white/30 leading-relaxed max-w-[480px] md:text-right">
          © 2026 Ravi Capitals Pvt. Ltd. Investments are subject to market risk. Please read all scheme-related documents carefully before investing. SEBI registration pending.
        </div>
      </footer>
    </>
  );
}
