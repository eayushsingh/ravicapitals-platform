export function Stats() {
  const stats = [
    { value: "₹48", unit: "Cr", label: "Assets under management" },
    { value: "12", unit: "K+", label: "Active investors" },
    { value: "9.8", unit: " %", label: "Avg. annual return" },
    { value: "48", unit: "", label: "Properties funded" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 px-6 md:px-14 lg:px-20 border-y border-slate-100">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`py-9 md:py-12 text-center border-slate-100
            ${idx % 2 === 0 ? "border-r" : ""}
            lg:border-r
            ${idx < 2 ? "border-b lg:border-b-0" : ""}
            last:border-r-0`}
        >
          <div
            className="text-[30px] md:text-[40px] font-black tracking-tight text-slate-900"
            style={{ letterSpacing: "-0.03em" }}
          >
            {stat.value}
            {stat.unit && (
              <span className="text-[18px] md:text-[22px] font-normal text-slate-400">
                {stat.unit}
              </span>
            )}
          </div>
          <div className="text-[10px] md:text-[11px] font-semibold tracking-[1.5px] uppercase text-slate-400 mt-1.5 px-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
