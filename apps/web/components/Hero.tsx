export function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex flex-col lg:flex-row items-center justify-center px-6 md:px-14 lg:px-20 pt-28 pb-32 gap-10 lg:gap-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #6BA4E7 0%, #4A90E2 55%, #387BCE 100%)" }}
    >
      {/* Subtle radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(255,255,255,0.10) 0%, transparent 65%)",
        }}
      />
      {/* Bottom-left subtle vignette */}
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(0,0,0,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ─── LEFT: Text ─── */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[560px] relative z-10">

        {/* Pill badge */}
        <div className="inline-flex items-center gap-2.5 mb-7 px-3.5 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm animate-rise-up">
          <div className="flex -space-x-1.5">
            {["#00D664", "#60a5fa", "#f472b6", "#fbbf24"].map((c, i) => (
              <div
                key={i}
                className="w-[22px] h-[22px] rounded-full border-2 border-white/30 flex items-center justify-center text-[7px] font-black text-white shadow-sm"
                style={{ background: c }}
              >
                {["R", "A", "M", "S"][i]}
              </div>
            ))}
          </div>
          <span className="text-[12px] font-semibold text-white/90 tracking-wide">
            ₹10 Cr+ Invested
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-[clamp(42px,6.5vw,82px)] font-black leading-[0.94] text-white animate-rise-up [animation-delay:60ms]"
          style={{ letterSpacing: "-0.03em" }}
        >
          Invest in India&apos;s<br />
          <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>
            Premium Real Estate
          </span>
        </h1>

        {/* Sub-bullets */}
        <ul className="mt-8 flex flex-col gap-3 animate-rise-up [animation-delay:140ms]">
          {[
            "Start investing from ₹10K",
            "Secured by ICICI Bank",
            "Buy and sell anytime",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 justify-center lg:justify-start">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[15px] font-medium text-white/90">{item}</span>
            </li>
          ))}
        </ul>

        {/* Rating row */}
        <div className="flex items-center gap-2.5 mt-8 animate-rise-up [animation-delay:200ms]">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 16 16" className="w-4 h-4 fill-yellow-400">
                <path d="M8 1l1.85 3.75L14 5.4l-3 2.92.7 4.1L8 10.35 4.3 12.42l.7-4.1L2 5.4l4.15-.65z" />
              </svg>
            ))}
            <svg viewBox="0 0 16 16" className="w-4 h-4">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#facc15" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                </linearGradient>
              </defs>
              <path d="M8 1l1.85 3.75L14 5.4l-3 2.92.7 4.1L8 10.35 4.3 12.42l.7-4.1L2 5.4l4.15-.65z" fill="url(#half)" />
            </svg>
          </div>
          <span className="text-[14px] font-bold text-white">4.8</span>
          <span className="text-[13px] text-white/60">(60k+ Downloads)</span>
        </div>

        {/* App Store CTAs */}
        <div className="flex flex-row gap-3 mt-7 animate-rise-up [animation-delay:260ms]">
          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/25 hover:bg-white/10 transition-all"
            style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="none">
              <path d="M3.18 1.24 13.8 12 3.18 22.76A1.5 1.5 0 0 1 2 21.3V2.7a1.5 1.5 0 0 1 1.18-1.46z" fill="#EA4335" />
              <path d="m14.54 12.74 2.17-2.17 3.47 1.97a1.5 1.5 0 0 1 0 2.62l-3.47 1.97-2.17-2.17z" fill="#FBBC04" />
              <path d="M3.18 1.24 13.8 12 16.71 9.1l-9.9-5.63a1.5 1.5 0 0 0-3.63-2.23z" fill="#4285F4" />
              <path d="M3.18 22.76 13.8 12l2.91 2.9-9.9 5.63a1.5 1.5 0 0 1-3.63 2.23z" fill="#34A853" />
            </svg>
            <div className="text-left">
              <div className="text-[9px] text-white/55 leading-none font-medium uppercase tracking-wide">Get it on</div>
              <div className="text-[13px] font-bold text-white leading-tight">Google Play</div>
            </div>
          </a>
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-2.5 px-4 py-3 rounded-[14px] border border-white/25 hover:bg-white/10 transition-all"
            style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[9px] text-white/55 leading-none font-medium uppercase tracking-wide">Download on the</div>
              <div className="text-[13px] font-bold text-white leading-tight">App Store</div>
            </div>
          </a>
        </div>
      </div>

      {/* ─── RIGHT: Phone Mockup ─── */}
      <div className="relative flex-shrink-0 animate-rise-up [animation-delay:120ms] z-10 animate-float">
        {/* Diffused glow */}
        <div
          className="absolute inset-[-30%] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Phone shell */}
        <div
          className="relative w-[230px] sm:w-[255px] lg:w-[278px] rounded-[42px] overflow-hidden border border-white/12"
          style={{
            background: "#0A0E1A",
            boxShadow: "0 40px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Notch / Dynamic Island */}
          <div className="flex justify-center pt-3.5 pb-1">
            <div className="w-[90px] h-[24px] bg-black rounded-full flex items-center justify-center gap-2 px-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
              <div className="w-[30px] h-[3px] rounded-full bg-white/08" />
            </div>
          </div>

          {/* Status bar */}
          <div className="flex justify-between items-center px-5 py-1">
            <span className="text-[10px] font-semibold text-white/80">9:41</span>
            <div className="flex items-center gap-1.5">
              {/* Signal */}
              <div className="flex items-end gap-[2px] h-3">
                {[3, 4, 5, 6].map((h, i) => (
                  <div
                    key={i}
                    className="w-[2.5px] rounded-[1px]"
                    style={{ height: `${h * 2}px`, background: i < 3 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)" }}
                  />
                ))}
              </div>
              {/* Wifi */}
              <svg viewBox="0 0 15 11" className="w-3.5 h-2.5 fill-white/80">
                <path d="M7.5 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0-3c1.2 0 2.28.49 3.07 1.27l-1.07 1.07A2.99 2.99 0 0 0 7.5 7a2.99 2.99 0 0 0-2 .84L4.43 6.77A4.48 4.48 0 0 1 7.5 5.5zm0-4c2.2 0 4.19.89 5.63 2.34L12.06 4.9A5.97 5.97 0 0 0 7.5 3a5.97 5.97 0 0 0-4.56 1.9L1.87 3.84A7.47 7.47 0 0 1 7.5 1.5z" />
              </svg>
              {/* Battery */}
              <div className="w-5 h-2.5 border border-white/50 rounded-[3px] relative">
                <div className="absolute inset-[2px] right-[2px] bg-white/85 rounded-[1px]" />
                <div className="absolute -right-[3px] top-[3px] w-[2px] h-[5px] bg-white/40 rounded-r" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="px-4 pt-3 pb-5 space-y-3">
            {/* Portfolio Header */}
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[9px] font-medium text-white/50 uppercase tracking-widest mb-0.5">Portfolio Value</div>
                <div
                  className="text-[26px] font-black text-white leading-none"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  ₹2,61,000
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span className="text-[10px] font-bold text-brand-green">+40.83%</span>
                </div>
              </div>
              {/* Line chart */}
              <svg viewBox="0 0 64 36" className="w-16 h-9">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D664" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#00D664" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,30 10,24 20,26 30,17 42,11 54,6 64,2"
                  fill="none"
                  stroke="#00D664"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon
                  points="0,30 10,24 20,26 30,17 42,11 54,6 64,2 64,36 0,36"
                  fill="url(#g1)"
                  opacity="0.35"
                />
              </svg>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Invested", value: "₹2,04,760", color: "text-white" },
                { label: "Total Returns", value: "+₹56,240", color: "text-brand-green" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="text-[8px] font-medium text-white/45 mb-0.5 uppercase tracking-wider">{s.label}</div>
                  <div className={`text-[12px] font-extrabold ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Property rows */}
            {[
              { name: "Northview Green Estate", current: "1,22,126", invested: "₹69,390", ret: "76%", accent: "#00D664" },
              { name: "Primus Enclave", current: "₹83,268", invested: "₹69,390", ret: "20%", accent: "#60a5fa" },
            ].map((p, i) => (
              <div
                key={i}
                className="rounded-2xl p-3"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <div className="text-[10px] font-bold text-white mb-1.5">{p.name}</div>
                <div className="flex justify-between text-[8px] font-medium text-white/40 mb-1">
                  <span>Current</span><span>Invested</span><span>Returns</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-white">{p.current}</span>
                  <span className="text-[10px] font-bold text-white">{p.invested}</span>
                  <span className="text-[10px] font-black" style={{ color: p.accent }}>{p.ret}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-3">
            <div className="w-20 h-[3px] bg-white/15 rounded-full" />
          </div>
        </div>

        {/* Floating Live IRR card */}
        <div
          className="absolute -right-4 sm:-right-12 top-[38%] w-[138px] rounded-2xl p-3.5 border border-white/20"
          style={{
            background: "rgba(10, 14, 26, 0.75)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <div className="text-[9px] font-semibold text-white/60 uppercase tracking-wider">Live IRR</div>
          </div>
          <div
            className="text-[22px] font-black text-brand-green leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            14.2%
          </div>
          <div className="text-[9px] text-white/50 mt-0.5">Prestige Tech Park</div>
          <div className="mt-2.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div className="h-1.5 rounded-full" style={{ width: "72%", background: "#00D664" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
