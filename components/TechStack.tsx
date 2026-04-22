"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

// ViewBox: 1000 x 280
// Centre rail sits at y=140 (exactly 50%)
// Solidity branches UP to y=40, The Graph branches DOWN to y=240
const CY = 140;
const UP = 40;
const DN = 240;

const nodes = [
  { id: "figma",      label: "Figma",      icon: "F",  cx: 80,  cy: CY },
  { id: "react",      label: "React",      icon: "⚛",  cx: 220, cy: CY },
  { id: "nextjs",     label: "Next.js",    icon: "N",  cx: 360, cy: CY },
  { id: "solidity",   label: "Solidity",   icon: "S",  cx: 460, cy: UP  },
  { id: "web3js",     label: "Web3.js",    icon: "W3", cx: 560, cy: CY },
  { id: "thegraph",   label: "The Graph",  icon: "G",  cx: 460, cy: DN  },
  { id: "tailwind",   label: "Tailwind",   icon: "TW", cx: 700, cy: CY },
  { id: "typescript", label: "TypeScript", icon: "TS", cx: 840, cy: CY },
  { id: "ipfs",       label: "IPFS",       icon: "⬡",  cx: 960, cy: CY },
];

const edges = [
  ["figma",     "react"],
  ["react",     "nextjs"],
  ["nextjs",    "solidity"],
  ["nextjs",    "thegraph"],
  ["solidity",  "web3js"],
  ["thegraph",  "web3js"],
  ["web3js",    "tailwind"],
  ["tailwind",  "typescript"],
  ["typescript","ipfs"],
];

export default function TechStack() {
  const svgRef = useRef<SVGSVGElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const nodeMap: Record<string, { cx: number; cy: number }> = {};
  nodes.forEach((n) => { nodeMap[n.id] = { cx: n.cx, cy: n.cy }; });

  const buildPath = (from: string, to: string) => {
    const a = nodeMap[from];
    const b = nodeMap[to];
    const mx = (a.cx + b.cx) / 2;
    const my = (a.cy + b.cy) / 2;
    const isDiag = a.cy !== b.cy;
    if (isDiag) return `M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`;
    return `M ${a.cx} ${a.cy} Q ${mx} ${my - 8} ${b.cx} ${b.cy}`;
  };

  useEffect(() => {
    if (!inView || !svgRef.current) return;
    const svg = svgRef.current;
    const paths = svg.querySelectorAll<SVGPathElement>(".edge-path");

    svg.querySelectorAll(".pulse-dot").forEach((d) => d.remove());

    paths.forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 0.7,
        delay: 0.2 + i * 0.1,
        ease: "power2.out",
      });

      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("r", "4");
      dot.setAttribute("fill", "#00d4ff");
      dot.setAttribute("class", "pulse-dot");
      dot.style.filter = "drop-shadow(0 0 6px #00d4ff)";
      dot.style.opacity = "0";
      svg.appendChild(dot);

      gsap.to(dot, {
        opacity: 1,
        motionPath: { path, align: path, autoRotate: false, start: 0, end: 1 },
        duration: 1.8,
        delay: 1.2 + i * 0.35,
        ease: "none",
        repeat: -1,
        repeatDelay: 2,
        onStart() { dot.style.opacity = "1"; },
        onRepeat() { dot.style.opacity = "1"; },
      });
    });
  }, [inView]);

  return (
    <section id="techstack" style={{ background: "#070b18", padding: "80px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 80px" }} ref={sectionRef}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}
        >
          <span
            className="animate-dot-pulse"
            style={{ width: 8, height: 8, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 10px #00d4ff", display: "block" }}
          />
          <span style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#e2e8f0" }}>
            Tech Stack
          </span>
        </motion.div>

        <svg
          ref={svgRef}
          viewBox="0 0 1000 280"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%", height: "auto", overflow: "visible", display: "block" }}
        >
          {edges.map(([from, to], i) => (
            <path
              key={i}
              className="edge-path"
              d={buildPath(from, to)}
              stroke="rgba(79,195,247,0.4)"
              strokeWidth="1.5"
              fill="none"
              style={{ filter: "drop-shadow(0 0 3px rgba(79,195,247,0.5))" }}
            />
          ))}

          {nodes.map((node, i) => (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: "backOut" }}
              style={{ originX: `${node.cx}px`, originY: `${node.cy}px`, cursor: "pointer" }}
              whileHover={{ scale: 1.15 }}
            >
              {/* Outer glow ring */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={34}
                fill="none"
                stroke="rgba(79,195,247,0.1)"
                strokeWidth="1"
              />
              {/* Main circle */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={28}
                fill="rgba(10,15,35,0.92)"
                stroke="rgba(79,195,247,0.4)"
                strokeWidth="1.2"
                style={{ filter: "drop-shadow(0 0 8px rgba(79,195,247,0.2))" }}
              />
              {/* Icon text */}
              <text
                x={node.cx}
                y={node.cy + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: node.icon.length > 1 ? "11px" : "13px",
                  fontWeight: 700,
                  fill: "#00d4ff",
                  userSelect: "none",
                }}
              >
                {node.icon}
              </text>
              {/* Label: above for Solidity, below for all others */}
              <text
                x={node.cx}
                y={node.id === "solidity" ? node.cy - 44 : node.cy + 48}
                textAnchor="middle"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fill: "#64748b",
                  userSelect: "none",
                }}
              >
                {node.label.toUpperCase()}
              </text>
            </motion.g>
          ))}
        </svg>

      </div>
    </section>
  );
}
