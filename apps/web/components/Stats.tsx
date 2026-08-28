export function Stats() {
  const stats = [
    { value: "₹48", unit: "Cr", label: "Assets under management" },
    { value: "12", unit: "K+", label: "Active investors" },
    { value: "9.8", unit: " %", label: "Avg. annual return" },
    { value: "48", unit: "", label: "Properties funded" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 px-6 md:px-12 border-y border-white-12">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`py-8 md:py-11 text-center border-white-12 
            ${idx % 2 === 0 ? "border-r" : ""} 
            lg:border-r 
            ${idx < 2 ? "border-b lg:border-b-0" : ""} 
            last:border-r-0`}
        >
          <div className="text-[28px] md:text-[38px] font-extrabold tracking-tight text-white">
            {stat.value}
            {stat.unit && <span className="text-[18px] md:text-[22px] font-light tracking-normal">{stat.unit}</span>}
          </div>
          <div className="text-[10px] md:text-[11.5px] font-medium tracking-[1.5px] uppercase text-white-55 mt-1.5 px-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
