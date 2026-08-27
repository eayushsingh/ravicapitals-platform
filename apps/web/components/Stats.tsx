export function Stats() {
  const stats = [
    { value: "₹48", unit: "Cr", label: "Assets under management" },
    { value: "12", unit: "K+", label: "Active investors" },
    { value: "9.8", unit: " %", label: "Avg. annual return" },
    { value: "48", unit: "", label: "Properties funded" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 px-12 border-y border-white-12">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="py-11 text-center border-r border-white-12 last:border-r-0"
        >
          <div className="text-[38px] font-extrabold tracking-tight text-white">
            {stat.value}
            {stat.unit && <span className="text-[22px] font-light tracking-normal">{stat.unit}</span>}
          </div>
          <div className="text-[11.5px] font-medium tracking-[1.5px] uppercase text-white-55 mt-1.5">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
