import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeLike: "#FF9F0D",
        blackish: "#0D0D0D",
        txtBlack: "#333333",
        txtlight: "#828282",
        txtVlight: "#BDBDBD",
        txtGray: "#4F4F4F",
        icons: "#1E1E1E",
        outline: "#E0E0E0",
        faqEntry: "#FAF7F2",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "page-header": "url('/assets/page-header-img.png')",
        "home1-back": " url('/assets/home1-back.png')",
        "grassy-bg": " url('/assets/home3-grassy bg.png')",
        "clients-bg": "url('/assets/home5-bg.png')",
        "home7-bg": "url('/assets/home7-bg.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      corePlugins: {
        preflight: false,
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};

export default config;
