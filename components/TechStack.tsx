"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const nodes = [
  { id: "figma",      label: "Figma",      icon: "F",  x: "8%",   y: "55%" },
  { id: "react",      label: "React",      icon: "⚛",  x: "20%",  y: "55%" },
  { id: "nextjs",     label: "Next.js",    icon: "N",  x: "32%",  y: "55%" },
  { id: "solidity",   label: "Solidity",   icon: "S",  x: "38%",  y: "18%" },
  { id: "web3js",     label: "Web3.js",    icon: "W3", x: "50%",  y: "55%" },
  { id: "thegraph",   label: "The Graph",  icon: "G",  x: "50%",  y: "88%" },
  { id: "tailwind",   label: "Tailwind",   icon: "TW", x: "64%",  y: "55%" },
  { id: "typescript", label: "TypeScript", icon: "TS", x: "76%",  y: "55%" },
  { id: "ipfs",       label: "IPFS",       icon: "⬡",  x: "90%",  y: "55%" },
];

// Lines between nodes [fromId, toId]
const edges = [
  ["figma","react"],
  ["react","nextjs"],
  ["nextjs","web3js"],
  ["nextjs","solidity"],
  ["web3js","thegraph"],
  ["web3js","tailwind"],
  ["tailwind","typescript"],
  ["typescript","ipfs"],
];

export default function TechStack() {
  const svgRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !svgRef.current) return;
    const svg = svgRef.current;
    const paths = svg.querySelectorAll<SVGPathElement>(".edge-path");

    paths.forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;

      // Draw the line in
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.8,
        delay: 0.3 + i * 0.12,
        ease: "power2.out",
      });

      // Travelling pulse dot
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("r", "4");
      dot.setAttribute("fill", "#00d4ff");
      dot.style.filter = "drop-shadow(0 0 6px #00d4ff)";
      dot.style.opacity = "0";
      svg.appendChild(dot);

      gsap.to(dot, {
        opacity: 1,
        motionPath: { path, align: path, autoRotate: false, start: 0, end: 1 },
        duration: 2,
        delay: 1.5 + i * 0.4,
        ease: "none",
        repeat: -1,
        repeatDelay: 1.5,
        onStart: () => { dot.style.opacity = "1"; },
      });
    });
  }, [inView]);

  // Convert % positions to approximate SVG coords (viewBox 1000x320)
  const toXY = (xPct: string, yPct: string) => {
    const x = (parseFloat(xPct) / 100) * 1000;
    const y = (parseFloat(yPct) / 100) * 320;
    return { x, y };
  };

  const nodeMap: Record<string, { x: number; y: number }> = {};
  nodes.forEach((n) => { nodeMap[n.id] = toXY(n.x, n.y); });

  return (
    <section id="techstack" style={{ background: "#070b18", padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }} ref={sectionRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}
        >
          <span className="animate-dot-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 10px #00d4ff", display: "block" }} />
          <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#e2e8f0" }}>Tech Stack</span>
        </motion.div>

        {/* Constellation */}
        <div style={{ position: "relative", width: "100%", height: 320 }}>
          {/* SVG lines */}
          <svg
            ref={svgRef}
            viewBox="0 0 1000 320"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
          >
            {edges.map(([from, to], i) => {
              const a = nodeMap[from];
              const b = nodeMap[to];
              const mx = (a.x + b.x) / 2;
              const my = (a.y + b.y) / 2 - 10;
              return (
                <path
                  key={i}
                  className="edge-path"
                  d={`M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`}
                  stroke="rgba(79,195,247,0.35)"
                  strokeWidth="1.5"
                  fill="none"
                  style={{ filter: "drop-shadow(0 0 3px rgba(79,195,247,0.4))" }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: "backOut" }}
              style={{
                position: "absolute",
                left: node.x, top: node.y,
                transform: "translate(-50%, -50%)",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.15 }}
            >
              <div style={{
                width: 56, height: 56,
                borderRadius: "50%",
                background: "rgba(10,15,35,0.9)",
                border: "1px solid rgba(79,195,247,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Orbitron',sans-serif", fontSize: 11, fontWeight: 700, color: "#00d4ff",
                boxShadow: "0 0 15px rgba(79,195,247,0.15)",
                transition: "box-shadow 0.3s, border-color 0.3s",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(79,195,247,0.5)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#00d4ff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(79,195,247,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,195,247,0.35)";
                }}
              >
                {node.icon}
              </div>
              <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 10, letterSpacing: 2, color: "#64748b", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
