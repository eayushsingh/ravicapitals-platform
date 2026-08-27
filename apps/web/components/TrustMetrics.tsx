export function TrustMetrics() {
  const metrics = [
    { val: "SEBI", lbl: "Regulated structure. Compliant with AIF Category II norms." },
    { val: "SPV", lbl: "Ring-fenced assets. Your fraction is independently held." },
    { val: "100%", lbl: "Transparent reporting. Monthly NAV statements." },
    { val: "Exit", lbl: "Secondary marketplace. Liquidity when you need it." },
  ];

  return (
    <section className="px-12 py-24 border-t border-white-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <div className="text-[11px] font-semibold tracking-[3px] uppercase text-white-55 mb-5">
          Why Ravi Capitals
        </div>
        <h2 className="text-[clamp(36px,4.5vw,58px)] font-extrabold tracking-tight text-white leading-tight mb-6">
          Built on <span className="text-white-30 font-light">trust.</span>
        </h2>
        <p className="text-[15px] text-white-55 leading-relaxed max-w-[420px]">
          Every property on Ravi Capitals is held inside a Special Purpose Vehicle — legally ring-fenced, independently audited, and registered with SEBI regulations.
        </p>
        <p className="text-[15px] text-white-55 leading-relaxed max-w-[420px] mt-3.5">
          Your investment is yours. Not a promise. A legal title.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px border border-white-12 rounded-2xl overflow-hidden bg-white-12">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-7 bg-white-07">
            <div className="text-[28px] font-extrabold tracking-tight text-white">{m.val}</div>
            <div className="text-xs text-white-55 mt-1 leading-normal">{m.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
