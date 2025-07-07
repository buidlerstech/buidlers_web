import type { Config } from "tailwindcss";

export default {
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
      fontFamily: {
        'serif': ['var(--font-crimson-text)', 'serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
        'mono': ['var(--font-fira-code)', 'monospace'],
        'cursive': ['var(--font-ephesis)', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
