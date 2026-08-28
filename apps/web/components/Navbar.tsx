"use client";

import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useState } from "react";

export function Navbar() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-[68px] border-b border-white-12 bg-brand-blue/55 backdrop-blur-md">
        <div className="text-[17px] font-bold tracking-tight text-white">
          Ravi<em className="not-italic font-light opacity-65">Capitals</em>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-9">
          <Link href="#properties" className="text-[13px] font-medium text-white-55 hover:text-white transition-colors">
            Properties
          </Link>
          <Link href="/dashboard" className="text-[13px] font-medium text-white-55 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link href="#how-it-works" className="text-[13px] font-medium text-white-55 hover:text-white transition-colors">
            How it works
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {isConnected ? (
            <button
              onClick={() => disconnect()}
              className="text-[13px] font-semibold text-brand-green bg-brand-green/10 border border-brand-green/30 px-4 py-2 rounded-md hover:bg-brand-green/20 transition-all"
            >
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </button>
          ) : (
            <button
              onClick={() => connect({ connector: connectors[0]! })}
              className="text-[13px] font-semibold text-white bg-white-12 border border-white-30 px-4 sm:px-5 py-2 rounded-md hover:bg-white-30 transition-all cursor-pointer"
            >
              Connect<span className="hidden sm:inline"> Wallet</span>
            </button>
          )}

          {/* Hamburger Icon */}
          <button 
            className="md:hidden text-white-55 hover:text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 z-40 bg-brand-blue border-b border-white-12 shadow-2xl p-6 flex flex-col gap-5">
          <Link href="#properties" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-white-55 hover:text-white transition-colors">
            Properties
          </Link>
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-white-55 hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-white-55 hover:text-white transition-colors">
            How it works
          </Link>
        </div>
      )}
    </>
  );
}
