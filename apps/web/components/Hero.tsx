export function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-6 md:px-12 pt-20 pb-16 relative">
      <div className="text-[11px] font-semibold tracking-[3px] uppercase text-white-55 mb-7 animate-rise-up">
        Fractional Real Estate · India
      </div>

      <h1 className="text-[clamp(44px,7.5vw,96px)] font-extrabold leading-[0.96] tracking-[-2px] md:tracking-[-4px] text-white mb-0 animate-rise-up [animation-delay:80ms]">
        Real estate.<br />
        <span className="text-white-30 font-light">Re-owned.</span>
      </h1>

      <div className="mt-9 animate-rise-up [animation-delay:180ms]">
        <p className="text-[15px] font-normal text-white-80 leading-relaxed max-w-[420px] mx-auto px-4 sm:px-0">
          Own a share of India's most valuable properties — from <strong className="font-semibold text-white">₹5,000.</strong> Earn rental income. Build generational wealth.
        </p>
        <p className="mt-5 text-lg font-semibold text-white tracking-tight italic opacity-90">
          "Wealth without walls."
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-11 justify-center animate-rise-up [animation-delay:260ms] w-full sm:w-auto px-6 sm:px-0">
        <button className="bg-white text-brand-blue-deep px-8 py-4 rounded-md text-sm font-bold hover:-translate-y-0.5 hover:opacity-95 transition-all cursor-pointer w-full sm:w-auto">
          Explore properties
        </button>
        <button className="bg-transparent border border-white-30 text-white px-7 py-4 rounded-md text-sm font-medium hover:bg-white-12 transition-colors cursor-pointer w-full sm:w-auto">
          See how it works
        </button>
      </div>

      <div className="inline-flex flex-col sm:flex-row items-center gap-2.5 mt-13 px-4.5 py-3 sm:py-2.5 border border-brand-green/30 rounded-full bg-brand-green/10 animate-rise-up [animation-delay:360ms] text-center max-w-[90%]">
        <div className="w-1.75 h-1.75 rounded-full bg-brand-green relative after:content-[''] after:absolute after:-inset-1.25 after:rounded-full after:border after:border-brand-green/40 after:animate-signal-pulse shrink-0" />
        <span className="text-[12px] sm:text-[12.5px] font-medium text-white-80">
          ₹1.2 Cr invested in the last 24 hours · 3 properties live now
        </span>
      </div>
    </section>
  );
}
