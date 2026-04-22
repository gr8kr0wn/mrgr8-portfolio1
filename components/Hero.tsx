"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ zIndex: 1 }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(76,29,149,0.38) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 65% 40%, rgba(0,212,255,0.09) 0%, transparent 60%), #02030a",
        }}
      />

      {/* Section dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="block w-1.5 h-1.5 rounded-full border"
            style={{
              borderColor: i === 0 ? "#00d4ff" : "rgba(79,195,247,0.3)",
              background: i === 0 ? "#00d4ff" : "transparent",
              boxShadow: i === 0 ? "0 0 8px #00d4ff" : "none",
            }}
          />
        ))}
      </div>

      {/* Outer flex: kanji on far left, then main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center" style={{ paddingLeft: "16px", paddingRight: "80px" }}>

        {/* Vertical kanji — sits in its own space, never overlaps */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{
            writingMode: "vertical-rl",
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "20px",
            color: "rgba(79,195,247,0.35)",
            letterSpacing: "8px",
            flexShrink: 0,
            marginRight: "24px",
            alignSelf: "center",
          }}
        >
          五 条 悟
        </motion.div>

        {/* Main 2-col grid */}
        <div className="flex-1 grid grid-cols-2 items-center gap-10">
        {/* LEFT */}
        <div className="flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", letterSpacing: "5px", color: "#4fc3f7" }}
          >
            — LIMITLESS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px,9vw,120px)", lineHeight: 0.9, letterSpacing: "3px" }}
          >
            <span style={{ color: "#ffffff" }}>MR </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(168,85,247,0.5))",
              }}
            >
              GR8
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "4px", color: "#64748b", textTransform: "uppercase" }}
          >
            Web3 Designer &amp; On-Chain Architect
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            style={{ transformOrigin: "left", width: 60, height: 1, background: "linear-gradient(90deg, #00d4ff, transparent)" }}
          />

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "16px", fontStyle: "italic", color: "rgba(226,232,240,0.65)", lineHeight: 1.8 }}
          >
            Throughout heaven and earth,<br />
            I alone am the honored one.
            <cite
              style={{ display: "block", marginTop: 6, fontStyle: "normal", fontFamily: "'Share Tech Mono', monospace", fontSize: "11px", letterSpacing: "2px", color: "#4fc3f7" }}
            >
              — MR GR8
            </cite>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex gap-4 mt-2"
          >
            <a
              href="#onchain"
              className="inline-flex items-center gap-2 px-7 py-3 font-rajdhani font-bold uppercase transition-all duration-300"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "13px",
                letterSpacing: "2px",
                background: "#7c3aed",
                color: "#fff",
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#a855f7";
                el.style.boxShadow = "0 0 35px rgba(168,85,247,0.6)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#7c3aed";
                el.style.boxShadow = "0 0 20px rgba(124,58,237,0.4)";
                el.style.transform = "translateY(0)";
              }}
            >
              On-Chain ↗
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 font-rajdhani font-bold uppercase transition-all duration-300"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "13px",
                letterSpacing: "2px",
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#00d4ff";
                el.style.color = "#00d4ff";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.25)";
                el.style.color = "#fff";
                el.style.transform = "translateY(0)";
              }}
            >
              View Work ↗
            </a>
          </motion.div>
        </div>

        {/* RIGHT — character */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative flex justify-center items-center"
          style={{ height: 620 }}
        >
          {/* Outer spinning ring */}
          <div
            className="absolute animate-spin-slow"
            style={{
              width: 500, height: 500,
              borderRadius: "50%",
              border: "1px solid rgba(0,212,255,0.25)",
            }}
          />
          {/* Inner reverse ring */}
          <div
            className="absolute animate-spin-reverse"
            style={{
              width: 420, height: 420,
              borderRadius: "50%",
              border: "1px solid rgba(168,85,247,0.2)",
            }}
          />
          {/* Pulsing glow ring */}
          <div
            className="absolute animate-ring-pulse"
            style={{
              width: 460, height: 460,
              borderRadius: "50%",
              border: "2px solid rgba(0,212,255,0.45)",
            }}
          />
          {/* Background vortex */}
          <div
            className="absolute"
            style={{
              width: 500, height: 500,
              borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(76,29,149,0.45) 0%, rgba(0,212,255,0.12) 45%, transparent 70%)",
            }}
          />
          {/* Character image */}
          <div className="animate-float relative z-10">
            <Image
              src="/hero-char.png"
              alt="MR GR8"
              width={440}
              height={560}
              style={{
                objectFit: "cover",
                objectPosition: "top center",
                filter: "drop-shadow(0 0 35px rgba(0,212,255,0.45)) drop-shadow(0 0 70px rgba(76,29,149,0.35))",
              }}
              priority
            />
          </div>
        </motion.div>
        </div>{/* end inner grid */}
      </div>{/* end outer flex */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 z-10" style={{ left: "60px" }}>
        <div
          className="animate-scroll-line"
          style={{ width: 1, height: 48, background: "linear-gradient(180deg, #00d4ff, transparent)" }}
        />
        <span
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "9px",
            letterSpacing: "3px",
            color: "#64748b",
            writingMode: "vertical-rl",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
