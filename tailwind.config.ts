import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#f5f8ff",
          100: "#e8effc",
          200: "#dce7fa",
          300: "#cddcf6",
        },
        stone: {
          50: "#f3f7ff",
          100: "#e4edfb",
          200: "#d4e3f7",
          300: "#bfd3ee",
          400: "#9cb7de",
          500: "#7396cd",
          600: "#4d77b5",
          700: "#2d5896",
          800: "#15397a",
          900: "#0b1f42",
        },
        brand: {
          50: "#edf3ff",
          100: "#d9e5ff",
          200: "#b8cdf5",
          300: "#90ade9",
          400: "#4475be",
          500: "#204f96",
          600: "#1a4480",
          700: "#13336b",
          800: "#0f2a59",
          900: "#0a1c42",
        },
      },
      borderRadius: {
        "4xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 12px 28px rgba(10, 35, 76, 0.14)",
      },
      fontFamily: {
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        display: ['"Manrope"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "76rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      backgroundImage: {
        "soft-routinea":
          "linear-gradient(120deg, rgba(238, 244, 255, 0.95), rgba(203, 224, 255, 0.85))",
      },
    },
  },
  plugins: [],
};

export default config;
