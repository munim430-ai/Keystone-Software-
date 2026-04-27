import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050B1E",
        bg2: "#070F26",
        ink: "#F8FAFC",
        muted: "#94A3B8",
        line: "rgba(148,163,184,0.14)",
        accent: "#22D3EE",
        "accent-soft": "rgba(34,211,238,0.18)",
        "accent-glow": "rgba(34,211,238,0.45)"
      },
      fontFamily: {
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"]
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 0.61, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
