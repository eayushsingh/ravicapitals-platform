export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Pick a property",
      body: "Browse curated, SEBI-compliant assets across Hyderabad, Bengaluru, and Chennai. Every property passes our 37-point due diligence process.",
    },
    {
      step: "02",
      title: "Buy your fraction",
      body: "Start from ₹5,000. Choose your ownership percentage. Your title share is registered, legally binding, and held in a transparent SPV structure.",
    },
    {
      step: "03",
      title: "Collect your returns",
      body: "Rental income is distributed monthly to your account. Watch capital appreciation build over time. Exit anytime via our secondary marketplace.",
    },
  ];

  return (
    <section id="how-it-works" className="px-6 md:px-14 lg:px-20 py-20 md:py-28 border-t border-slate-100">
      <div className="text-[11px] font-black tracking-[0.18em] uppercase text-slate-400 mb-5">
        How it works
      </div>
      <h2
        className="text-[clamp(34px,4.5vw,58px)] font-black tracking-tight text-slate-900 leading-tight mb-14"
        style={{ letterSpacing: "-0.03em" }}
      >
        Three steps.<br />
        <span className="text-slate-300 font-light">One portfolio.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-[28px] overflow-hidden border border-slate-100 bg-slate-100">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="p-9 bg-white hover:bg-slate-50 transition-colors group"
          >
            <div
              className="text-[40px] font-black mb-7 leading-none"
              style={{ color: "#1969FE", letterSpacing: "-0.04em", opacity: 0.15 }}
            >
              {item.step}
            </div>
            <div
              className="text-xl font-black text-slate-900 mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              {item.title}
            </div>
            <div className="text-[14px] text-slate-500 leading-relaxed">
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
