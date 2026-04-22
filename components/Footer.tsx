"use client";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        position: "relative",
        zIndex: 1,
        background: "rgba(2,3,10,0.97)",
        borderTop: "1px solid rgba(79,195,247,0.08)",
        padding: "28px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" style={{ filter: "drop-shadow(0 0 5px #4fc3f7)" }}>
          <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" stroke="#4fc3f7" strokeWidth="1.5" fill="none" />
          <path d="M12 14L20 28L28 14" stroke="#4fc3f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 14V28" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="#4fc3f7" opacity="0.8" />
        </svg>
        <div>
          <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: "rgba(79,195,247,0.5)", letterSpacing: 3 }}>天上天下，唯我独尊</p>
          <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 8, letterSpacing: 3, color: "#64748b", textTransform: "uppercase", marginTop: 2 }}>I Alone Am The Honored One</p>
        </div>
      </div>

      {/* Center */}
      <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 10, letterSpacing: 2, color: "#64748b" }}>
        © 2024 MR GR8. All rights reserved.
      </p>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Share Tech Mono',monospace", fontSize: 10, letterSpacing: 3, color: "#4fc3f7", textTransform: "uppercase" }}>
          <span className="animate-dot-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 6px #00d4ff", display: "block" }} />
          Connect
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {/* X / Twitter */}
          <a href="#" style={{ color: "#64748b", transition: "color 0.3s", display: "flex" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00d4ff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          {/* GitHub */}
          <a href="#" style={{ color: "#64748b", transition: "color 0.3s", display: "flex" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00d4ff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          {/* Globe */}
          <a href="#" style={{ color: "#64748b", transition: "color 0.3s", display: "flex" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00d4ff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
