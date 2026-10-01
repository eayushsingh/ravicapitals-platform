export function TrustMetrics() {
  const metrics = [
    { val: "SEBI", lbl: "Regulated structure. Compliant with AIF Category II norms." },
    { val: "SPV", lbl: "Ring-fenced assets. Your fraction is independently held." },
    { val: "100%", lbl: "Transparent reporting. Monthly NAV statements." },
    { val: "Exit", lbl: "Secondary marketplace. Liquidity when you need it." },
  ];

  return (
    <section className="px-6 md:px-14 lg:px-20 py-20 lg:py-28 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
      <div>
        <div className="text-[11px] font-black tracking-[0.18em] uppercase text-slate-400 mb-5">
          Why Ravi Capitals
        </div>
        <h2
          className="text-[clamp(34px,4.5vw,58px)] font-black text-slate-900 leading-tight mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Built on{" "}
          <span className="text-slate-300 font-light">trust.</span>
        </h2>
        <p className="text-[16px] text-slate-500 leading-relaxed max-w-[420px] mb-4">
          Every property on Ravi Capitals is held inside a Special Purpose Vehicle — legally ring-fenced, independently audited, and registered with SEBI regulations.
        </p>
        <p className="text-[16px] text-slate-500 leading-relaxed max-w-[420px]">
          Your investment is yours. Not a promise. A legal title.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="p-7 rounded-[24px] border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
          >
            <div
              className="text-[28px] font-black text-slate-900 mb-1.5"
              style={{ letterSpacing: "-0.03em", color: "#52C5EA" }}
            >
              {m.val}
            </div>
            <div className="text-[13px] text-slate-500 leading-normal">{m.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
