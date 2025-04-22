import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

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
        parkinsans: ["var(--font-parkinsans)", ...fontFamily.sans],
        geistMono: ["var(--font-geist-mono)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
