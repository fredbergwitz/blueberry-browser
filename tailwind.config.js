/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/renderer/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        persona: 'var(--persona)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.1rem)",
        sm: "calc(var(--radius) - 0.4rem)",
      },
      fontSize: {
        "2xs": ["0.625rem", "0.75rem"],
      },
      spacing: {
        4.5: "1.125rem",
      },
      boxShadow: {
        subtle: "0 0 6px rgba(0,0,0,0.06)",
        tab: "0 0 5px rgba(0,0,0,0.08)",
        expanded: "0 8px 16px rgba(0,0,0,0.15)",
        chat: "0 10px 40px rgba(0,0,0,0.04)",
      },
      animation: {
        "spring-scale": "spring-scale 0.2s ease-in-out forwards",
        "star-spin": "star-spin 3s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out forwards",
      },
      keyframes: {
        "spring-scale": {
          "0%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
        "star-spin": {
          "0%, 50%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(-20deg)" },
          "65%": { transform: "rotate(-15deg)" },
          "67%": { transform: "rotate(-20deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
