"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Holding {
  id: string;
  tokenCount: number;
  amountPaid: string;
  createdAt: string;
  property: {
    title: string;
    location: string;
    expectedYield: string;
    spvName: string;
  };
}

interface PortfolioData {
  totalInvested: number;
  totalTokens: number;
  holdings: Holding[];
}

export default function DashboardPage() {
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock token for local dev test until frontend auth state is wired
  useEffect(() => {
    async function loadPortfolio() {
      try {
        const token = localStorage.getItem("rc_token");
        const res = await fetch("http://localhost:4000/investments/portfolio", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (res.ok) {
          const data = await res.json();
          setPortfolio(data);
        } else {
          // Fallback sample view matching patent blueprint
          setPortfolio({
            totalInvested: 1850230.50,
            totalTokens: 370,
            holdings: [
              {
                id: "inv-1",
                tokenCount: 104,
                amountPaid: "520000.00",
                createdAt: new Date().toISOString(),
                property: {
                  title: "Prestige Tech Park — Block C",
                  location: "Whitefield, Bengaluru",
                  expectedYield: "10.20",
                  spvName: "RaviCap SPV Alpha Bengaluru Ltd",
                },
              },
              {
                id: "inv-2",
                tokenCount: 104,
                amountPaid: "520000.00",
                createdAt: new Date().toISOString(),
                property: {
                  title: "Gachibowli Sky Residences",
                  location: "Gachibowli, Hyderabad",
                  expectedYield: "8.90",
                  spvName: "RaviCap SPV Beta Hyderabad Ltd",
                },
              },
            ],
          });
        }
      } catch (err) {
        console.error("Failed to load portfolio:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPortfolio();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Dashboard Header */}
      <header className="border-b border-white/10 px-8 py-4 flex justify-between items-center bg-[#1e293b]/60 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Ravi<span className="font-light opacity-60">Capitals</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-white/60">
            <span className="text-white border-b-2 border-brand-green pb-1">Portfolio</span>
            <Link href="/#properties" className="hover:text-white transition-colors">Marketplace</Link>
            <span className="hover:text-white transition-colors cursor-pointer">Statements</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-medium">
            KYC Verified
          </span>
          <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center font-bold text-xs">
            AS
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
              Total Portfolio Value
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-white">
              ₹{portfolio?.totalInvested.toLocaleString("en-IN") || "0"}
            </div>
            <div className="text-xs text-brand-green mt-2 font-medium">
              +5.2% annualized appreciation
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
              Total Tokens Held
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-white">
              {portfolio?.totalTokens || 0} <span className="text-sm font-normal text-white/50">Shares</span>
            </div>
            <div className="text-xs text-white/50 mt-2">
              Across {portfolio?.holdings.length || 0} SPV Properties
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
              Weighted Avg. Rental Yield
            </div>
            <div className="text-3xl font-extrabold tracking-tight text-brand-green">
              9.55% <span className="text-sm font-normal text-white/50">APR</span>
            </div>
            <div className="text-xs text-white/50 mt-2">
              Occupancy-triggered monthly distributions[cite: 2]
            </div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="px-4 sm:px-6 py-5 border-b border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
            <h2 className="text-lg font-bold tracking-tight">Your Real Estate Holdings</h2>
            <button className="text-xs font-semibold px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-all w-fit">
              Download SPV Title Deeds
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[800px]">
              <thead className="bg-white/[0.02] text-xs uppercase text-white/50 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">Property & SPV</th>
                  <th className="px-6 py-4">Tokens</th>
                  <th className="px-6 py-4">Invested Capital</th>
                  <th className="px-6 py-4">Expected Yield</th>
                  <th className="px-6 py-4">Payout Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {portfolio?.holdings.map((h) => (
                  <tr key={h.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">{h.property.title}</div>
                      <div className="text-xs text-white/50">{h.property.spvName}</div>
                    </td>
                    <td className="px-6 py-4 font-medium">{h.tokenCount}</td>
                    <td className="px-6 py-4 font-medium">₹{Number(h.amountPaid).toLocaleString("en-IN")}</td>
                    <td className="px-6 py-4 font-medium text-brand-green">{h.property.expectedYield}%</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-brand-green/10 text-brand-green border border-brand-green/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                        Active (Paid)
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
