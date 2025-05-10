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
      typography: (theme: (arg0: string) => any) => ({
        default: {
          css: {
            h1: { color: theme('colors.teal.700')},
            h2: { color: theme('colors.fuchsia.600')},
            h3: { color: theme('colors.indigo.700')},
            h4: { color: theme('colors.lime.500')},
          },
        },
      }),
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
