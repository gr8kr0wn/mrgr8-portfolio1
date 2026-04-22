"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { num: 3, suffix: "+", label: "Years Experience" },
  { num: 25, suffix: "+", label: "Projects Built" },
  { num: 10, suffix: "+", label: "Chains Worked On" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ background: "#02030a", padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}
        >
          <span className="animate-dot-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 10px #a855f7", display: "block" }} />
          <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#e2e8f0" }}>About Me</span>
        </motion.div>

        {/* 3-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 220px", gap: 60, alignItems: "center" }}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div
              className="clip-corner-lg"
              style={{ position: "absolute", inset: -1, background: "linear-gradient(135deg, rgba(0,212,255,0.4), rgba(168,85,247,0.4))", zIndex: 0 }}
            />
            <Image
              src="/about-me.png"
              alt="MR GR8 About"
              width={280}
              height={380}
              className="clip-corner-lg"
              style={{ objectFit: "cover", objectPosition: "top", display: "block", filter: "drop-shadow(0 0 20px rgba(0,212,255,0.3))", position: "relative", zIndex: 1 }}
            />
          </motion.div>

          {/* Quote + Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <blockquote style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: 20, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, top: -10, fontSize: 60, color: "#a855f7", opacity: 0.4, lineHeight: 1, fontFamily: "Georgia, serif" }}>"</span>
              I design for attention, not approval.<br />
              If it doesn&apos;t feel powerful, I don&apos;t ship it.
            </blockquote>

            <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 15, fontWeight: 400, color: "rgba(226,232,240,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
              Web3 Designer &amp; On-chain Architect with a passion for building immersive,
              high-performance experiences that live on the blockchain.
            </p>

            <a
              href="#footer"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "12px 28px",
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#00d4ff";
                el.style.color = "#00d4ff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.25)";
                el.style.color = "#fff";
              }}
            >
              Let&apos;s Build ↗
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: 52,
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #fff, #4fc3f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  <CountUp target={s.num} suffix={s.suffix} />
                </div>
                <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 9, letterSpacing: 3, color: "#64748b", textTransform: "uppercase", marginTop: 2 }}>{s.label}</p>
                <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, #4fc3f7, transparent)", marginTop: 10 }} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
