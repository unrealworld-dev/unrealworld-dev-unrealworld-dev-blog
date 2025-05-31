import type { Config } from "tailwindcss";

export default {
  darkMode: ['class'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        neon: "neonGlow 2.0s infinite alternate",
      }
    },
    keyframes: {
      neonGlow: {
        "0%": {
          textShadow: "none",
        },
        "100%": {
          textShadow: "0 0 2px var(--neon-color), 0 0 4px var(--neon-color)",
        },
      },
    },

  },
  plugins: [],
} satisfies Config;
