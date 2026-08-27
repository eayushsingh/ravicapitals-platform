interface Property {
  id: string;
  name: string;
  location: string;
  type: string;
  yieldRate: string;
  minInvestment: string;
  icon: string;
}

const mockProperties: Property[] = [
  {
    id: "prop-1",
    name: "Prestige Tech Park — Block C",
    location: "Whitefield, Bengaluru · Grade A office",
    type: "Commercial",
    yieldRate: "10.2% yield",
    minInvestment: "₹5,000",
    icon: "🏢",
  },
  {
    id: "prop-2",
    name: "Gachibowli Sky Residences",
    location: "Gachibowli, Hyderabad · Premium apartments",
    type: "Residential",
    yieldRate: "8.9% yield",
    minInvestment: "₹5,000",
    icon: "🏘️",
  },
  {
    id: "prop-3",
    name: "ORR Growth Corridor — Phase II",
    location: "Outer Ring Road, Hyderabad · High-growth land",
    type: "Plots",
    yieldRate: "14% yield",
    minInvestment: "₹5,000",
    icon: "🌿",
  },
];

export function PropertiesGrid() {
  return (
    <section id="properties" className="px-12 pb-24 pt-12">
      <div className="text-[11px] font-semibold tracking-[3px] uppercase text-white-55 mb-5">
        Live opportunities
      </div>
      <h2 className="text-[clamp(36px,4.5vw,58px)] font-extrabold tracking-tight text-white leading-tight">
        Open for <span className="text-white-30 font-light">investment.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        {mockProperties.map((prop) => (
          <div
            key={prop.id}
            className="border border-white-12 rounded-xl overflow-hidden bg-white-07 hover:border-white-30 transition-all"
          >
            <div className="h-36 flex items-center justify-center border-b border-white-12 relative overflow-hidden bg-white/5">
              <div className="absolute inset-0 opacity-20 text-8xl flex items-center justify-center filter blur-[1px]">
                {prop.icon}
              </div>
              <span className="absolute top-3.5 left-3.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-white/15 border border-white/20 text-white">
                {prop.type}
              </span>
              <span className="absolute top-3.5 right-3.5 text-[12px] font-bold px-2.5 py-1 rounded bg-brand-green-soft border border-brand-green/30 text-brand-green">
                {prop.yieldRate}
              </span>
            </div>

            <div className="p-5.5">
              <h3 className="text-base font-bold text-white tracking-tight mb-1">{prop.name}</h3>
              <p className="text-xs text-white-55 mb-4.5">{prop.location}</p>

              <div className="flex justify-between items-center pt-2 border-t border-white-12">
                <div>
                  <div className="text-[11px] font-medium text-white-55 uppercase tracking-wide">From</div>
                  <div className="text-xl font-extrabold text-white tracking-tight">{prop.minInvestment}</div>
                </div>
                <button className="text-xs font-semibold text-white px-4 py-2 rounded bg-white-12 border border-white-30 hover:bg-white-30 transition-all cursor-pointer">
                  Invest now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
