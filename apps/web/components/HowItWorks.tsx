export function HowItWorks() {
  const steps = [
    {
      step: "Step 01",
      title: "Pick a property",
      body: "Browse curated, SEBI-compliant assets across Hyderabad, Bengaluru, and Chennai. Every property passes our 37-point due diligence process.",
    },
    {
      step: "Step 02",
      title: "Buy your fraction",
      body: "Start from ₹5,000. Choose your ownership percentage. Your title share is registered, legally binding, and held in a transparent SPV structure.",
    },
    {
      step: "Step 03",
      title: "Collect your returns",
      body: "Rental income is distributed monthly to your account. Watch capital appreciation build over time. Exit anytime via our secondary marketplace.",
    },
  ];

  return (
    <section id="how-it-works" className="px-12 py-24 border-t border-white-12">
      <div className="text-[11px] font-semibold tracking-[3px] uppercase text-white-55 mb-5">
        How it works
      </div>
      <h2 className="text-[clamp(36px,4.5vw,58px)] font-extrabold tracking-tight text-white leading-tight">
        Three steps.<br />
        <span className="text-white-30 font-light">One portfolio.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white-12 rounded-2xl overflow-hidden mt-14 bg-white-12">
        {steps.map((item, idx) => (
          <div key={idx} className="p-9 bg-white-07 hover:bg-white-12 transition-colors">
            <div className="text-[11px] font-bold tracking-widest uppercase text-white-30 mb-7">
              {item.step}
            </div>
            <div className="text-xl font-bold tracking-tight text-white mb-2.5">
              {item.title}
            </div>
            <div className="text-sm text-white-55 leading-relaxed">
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
