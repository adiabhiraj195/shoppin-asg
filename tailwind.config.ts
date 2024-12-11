import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgGray: "#202124",
        hGray: "#353737",
        bgGray2: "#303135",
        buttonGray: "#3d4043",
        darkGray: "#171717"
      },
    },
  },
  plugins: [],
} satisfies Config;
