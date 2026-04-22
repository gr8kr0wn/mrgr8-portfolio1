"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function OnChain() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const copyWallet = () => {
    navigator.clipboard.writeText("tzjUQxKpnjsJ7J2sdNPmZa4UBNgcPNC6h4Nb4hJAMW2");
  };

  return (
    <section id="onchain" style={{ background: "#070b18", padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-9"
        >
          <span
            className="animate-dot-pulse"
            style={{ width: 8, height: 8, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 10px #00d4ff", display: "block" }}
          />
          <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#e2e8f0" }}>
            On-Chain Identity
          </span>
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {/* Wallet */}
          <motion.div
            custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="clip-corner"
            style={{ background: "rgba(10,15,35,0.85)", border: "1px solid rgba(79,195,247,0.5)", padding: 20, boxShadow: "0 0 25px rgba(79,195,247,0.12), inset 0 0 20px rgba(79,195,247,0.03)" }}
          >
            <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, letterSpacing: 3, color: "#64748b", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
              Wallet Address
            </p>
            <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 18, color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
              tzjUQ...MW2
              <button onClick={copyWallet} style={{ background: "none", border: "none", cursor: "pointer", color: "#4fc3f7", padding: 2 }} title="Copy">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, fontFamily: "'Share Tech Mono',monospace", fontSize: 10, letterSpacing: 2, color: "#4fc3f7" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4fc3f7", boxShadow: "0 0 6px #4fc3f7", display: "block" }} />
              Solana
            </div>
          </motion.div>

          {/* ENS */}
          <motion.div
            custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="clip-corner"
            style={{ background: "rgba(10,15,35,0.85)", border: "1px solid rgba(79,195,247,0.18)", padding: 20 }}
          >
            <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, letterSpacing: 3, color: "#64748b", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20M2 12h20"/></svg>
              ENS Name
            </p>
            <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 15, color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
              gr8kr0wn.base.eth
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#00d4ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, letterSpacing: 3, color: "#64748b", textTransform: "uppercase", marginTop: 10 }}>Primary ENS</p>
          </motion.div>

          {/* NFT Collection */}
          <motion.div
            custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="clip-corner"
            style={{ background: "rgba(10,15,35,0.85)", border: "1px solid rgba(79,195,247,0.18)", padding: 20 }}
          >
            <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, letterSpacing: 3, color: "#64748b", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
              NFT Collection
            </p>
            <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 12 }}>
              <Image src="/hero-char.png" alt="NFT 1" width={48} height={48} style={{ borderRadius: 6, border: "1px solid rgba(79,195,247,0.2)", objectFit: "cover" }} />
              <Image src="/about-me.png" alt="NFT 2" width={48} height={48} style={{ borderRadius: 6, border: "1px solid rgba(79,195,247,0.2)", objectFit: "cover" }} />
              <div style={{ width: 48, height: 48, borderRadius: 6, background: "linear-gradient(135deg,#1a0533,#0d0d2b)", border: "1px solid rgba(79,195,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Orbitron',sans-serif", fontSize: 9, color: "#4fc3f7" }}>GR8</div>
              <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#00d4ff", color: "#000", fontFamily: "'Orbitron',sans-serif", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>12</div>
            </div>
            <a href="#" style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 10, letterSpacing: 2, color: "#4fc3f7", textDecoration: "none" }}>View Collection →</a>
          </motion.div>

          {/* Activity */}
          <motion.div
            custom={3} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="clip-corner"
            style={{ background: "rgba(10,15,35,0.85)", border: "1px solid rgba(79,195,247,0.18)", padding: 20 }}
          >
            <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, letterSpacing: 3, color: "#64748b", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
              On-Chain Activity
            </p>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 52, color: "#fff", lineHeight: 1 }}>
              <CountUp target={124} />
            </div>
            <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, letterSpacing: 3, color: "#64748b", textTransform: "uppercase", marginTop: 4 }}>Total Transactions</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10, fontFamily: "'Share Tech Mono',monospace", fontSize: 10, color: "#4fc3f7" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
              7 Chains
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
