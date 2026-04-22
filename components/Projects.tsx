"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { name: "KREAT", tag: "UI/UX", desc: "Next-gen creative platform for digital artists and Web3 collectors.", imgSrc: "" },
  { name: "DEVIANT", tag: "NFT", desc: "Exclusive membership NFT collection for the bold and the fearless.", imgSrc: "" },
  { name: "AI-ACCESS", tag: "DEFI", desc: "AI-powered gateway to decentralized tools and on-chain intelligence.", imgSrc: "" },
  { name: "ZYBRAFI", tag: "BRANDING", desc: "Brand identity and design system for next-gen Web3 native projects.", imgSrc: "" },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" style={{ background: "#02030a", padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="animate-dot-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 10px #a855f7", display: "block" }} />
            <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#e2e8f0" }}>Featured Projects</span>
          </div>
          <a href="#" style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, letterSpacing: 2, color: "#4fc3f7", textDecoration: "none" }}>View All Projects →</a>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="clip-corner"
              style={{ background: "rgba(10,15,35,0.85)", border: "1px solid rgba(79,195,247,0.18)", cursor: "pointer", overflow: "hidden", transition: "transform 0.4s, box-shadow 0.4s, border-color 0.4s" }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(168,85,247,0.15)", borderColor: "rgba(168,85,247,0.5)" } as any}
            >
              {/* Thumbnail */}
              {p.imgSrc ? (
                <img src={p.imgSrc} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }} />
              ) : (
                <div style={{
                  width: "100%", height: 160,
                  background: "linear-gradient(135deg, #0d0d2b 0%, #1a0533 50%, #0a1628 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Orbitron',sans-serif", fontSize: 11, color: "rgba(79,195,247,0.3)", letterSpacing: 3,
                  position: "relative", overflow: "hidden"
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(168,85,247,0.2), transparent 70%)" }} />
                  {/* Placeholder hint */}
                  <span style={{ position: "relative", zIndex: 1 }}>ADD IMAGE</span>
                </div>
              )}

              {/* Info */}
              <div style={{ padding: 16 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>{p.name}</span>
                  <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 8, letterSpacing: 2, padding: "3px 8px", background: "rgba(124,58,237,0.25)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.3)", textTransform: "uppercase" }}>{p.tag}</span>
                </div>
                <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 13, fontWeight: 400, color: "#64748b", lineHeight: 1.5 }}>{p.desc}</p>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4fc3f7" strokeWidth="2" opacity={0.5}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
