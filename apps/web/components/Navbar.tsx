"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-[68px] border-b border-white-12 bg-brand-blue/55 backdrop-blur-md">
      <div className="text-[17px] font-bold tracking-tight text-white">
        Ravi<em className="not-italic font-light opacity-65">Capitals</em>
      </div>
      <div className="hidden md:flex gap-9">
        <Link href="#properties" className="text-[13px] font-medium text-white-55 hover:text-white transition-colors">
          Properties
        </Link>
        <Link href="#how-it-works" className="text-[13px] font-medium text-white-55 hover:text-white transition-colors">
          How it works
        </Link>
        <Link href="#returns" className="text-[13px] font-medium text-white-55 hover:text-white transition-colors">
          Returns
        </Link>
        <Link href="#about" className="text-[13px] font-medium text-white-55 hover:text-white transition-colors">
          About
        </Link>
      </div>
      <button className="text-[13px] font-semibold text-white bg-white-12 border border-white-30 px-5 py-2 rounded-md hover:bg-white-30 transition-all whitespace-nowrap">
        Start investing →
      </button>
    </nav>
  );
}
