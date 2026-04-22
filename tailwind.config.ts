import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        rajdhani: ["'Rajdhani'", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
        orbitron: ["'Orbitron'", "sans-serif"],
      },
      colors: {
        blue: {
          bright: "#00d4ff",
          DEFAULT: "#4fc3f7",
        },
        purple: {
          bright: "#a855f7",
          DEFAULT: "#7c3aed",
          glow: "#6d28d9",
        },
        bg: {
          DEFAULT: "#02030a",
          2: "#070b18",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(76,29,149,0.35) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 65% 40%, rgba(0,212,255,0.08) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
