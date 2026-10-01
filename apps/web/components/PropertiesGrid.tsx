"use client";

import { useState, useEffect } from "react";
import { InvestModal } from "./InvestModal";

interface PropertyData {
  id: string;
  title: string;
  location: string;
  type: string;
  expectedYield: string | number;
  tokenPrice: string | number;
  availableTokens?: number;
  contractAddress?: string;
}

export function PropertiesGrid() {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("http://localhost:4000/properties");
        if (!res.ok) throw new Error("API responded with error");
        const data = await res.json();
        setProperties(data);
      } catch (e) {
        console.warn("API offline, rendering default properties:", e);
        setProperties([
          {
            id: "prop-1",
            title: "Prestige Tech Park — Block C",
            location: "Whitefield, Bengaluru · Grade A office",
            type: "COMMERCIAL",
            expectedYield: "10.2",
            tokenPrice: 5000,
            availableTokens: 18400,
          },
          {
            id: "prop-2",
            title: "Gachibowli Sky Residences",
            location: "Gachibowli, Hyderabad · Premium apartments",
            type: "RESIDENTIAL",
            expectedYield: "8.9",
            tokenPrice: 5000,
            availableTokens: 9200,
          },
          {
            id: "prop-3",
            title: "ORR Growth Corridor — Phase II",
            location: "Outer Ring Road, Hyderabad · High-growth land",
            type: "PLOTS",
            expectedYield: "14.0",
            tokenPrice: 5000,
            availableTokens: 4100,
          },
        ]);
      }
    }
    load();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "COMMERCIAL": return "🏢";
      case "RESIDENTIAL": return "🏘️";
      case "PLOTS": return "🌿";
      default: return "📍";
    }
  };

  return (
    <section id="properties" className="px-6 md:px-14 lg:px-20 pb-24 pt-12 border-t border-slate-100">
      <div className="text-[11px] font-black tracking-[0.18em] uppercase text-slate-400 mb-5">
        Live opportunities
      </div>
      <h2
        className="text-[clamp(34px,4.5vw,58px)] font-black text-slate-900 leading-tight mb-14"
        style={{ letterSpacing: '-0.03em' }}
      >
        Open for <span className="text-slate-300 font-light">investment.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
        {properties.map((prop) => (
          <div
            key={prop.id}
            className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-slate-200 hover:shadow-md transition-all"
          >
            <div className="h-36 flex items-center justify-center border-b border-slate-100 relative overflow-hidden bg-slate-50">
              <div className="absolute inset-0 opacity-30 text-8xl flex items-center justify-center filter blur-[1px]">
                {getIcon(prop.type)}
              </div>
              <span className="absolute top-3.5 left-3.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-slate-900 text-white">
                {prop.type}
              </span>
              <span className="absolute top-3.5 right-3.5 text-[12px] font-bold px-2.5 py-1 rounded-full text-[#0A0E1A]" style={{ background: '#00D664' }}>
                {Number(prop.expectedYield)}% yield
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1">{prop.title}</h3>
              <p className="text-xs text-slate-400 mb-4">{prop.location}</p>

              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">From</div>
                  <div className="text-xl font-black text-slate-900" style={{ letterSpacing: '-0.03em' }}>
                    ₹{Number(prop.tokenPrice).toLocaleString('en-IN')}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProperty(prop)}
                  className="text-[12px] font-bold text-white px-4 py-2 rounded-full transition-all cursor-pointer hover:opacity-90"
                  style={{ background: '#4A90E2' }}
                >
                  Invest now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <InvestModal
          property={{
            ...selectedProperty,
            availableTokens: selectedProperty.availableTokens || 1000,
          }}
          isOpen={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}
