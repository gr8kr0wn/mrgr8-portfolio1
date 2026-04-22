"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const links = ["Home", "Work", "On-Chain", "About", "Contact"];
const hrefs = ["#hero", "#projects", "#onchain", "#about", "#footer"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4"
      style={{
        background: "rgba(2,3,10,0.75)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(79,195,247,0.08)",
      }}
    >
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-3 no-underline">
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" style={{ filter: "drop-shadow(0 0 6px #4fc3f7)" }}>
          <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" stroke="#4fc3f7" strokeWidth="1.5" fill="none" />
          <path d="M12 14L20 28L28 14" stroke="#4fc3f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 14V28" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="#4fc3f7" opacity="0.8" />
        </svg>
        <span
          className="font-orbitron text-white text-sm tracking-widest uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "3px" }}
        >
          MR GR8
        </span>
      </a>

      {/* Links */}
      <ul className="flex gap-9 list-none">
        {links.map((link, i) => (
          <li key={link}>
            <a
              href={hrefs[i]}
              className="font-rajdhani text-xs font-semibold uppercase tracking-widest transition-colors duration-300 no-underline"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "2px",
                color: i === 0 ? "#00d4ff" : "#64748b",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#00d4ff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = i === 0 ? "#00d4ff" : "#64748b")}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
