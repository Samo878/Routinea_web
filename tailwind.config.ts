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
          50: "#FBF7F2",
          100: "#F5EFE8",
          200: "#EFE4D6",
          300: "#E9D9C4",
          400: "#E3CEB2",
          500: "#DDC3A0",
          600: "#C8B08C",
          700: "#B39A78",
          800: "#9B8366",
          900: "#826D54",
        },
        stone: {
          50: "#F3F8FD",
          100: "#E3F0FC",
          200: "#D1E5F9",
          300: "#B9D5F4",
          400: "#9AC1ED",
          500: "#6CA4E0",
          600: "#4A85D0",
          700: "#2B67BD",
          800: "#145DA1",
          900: "#104E87",
        },
        brand: {
          50: "#E9F4FF",
          100: "#D8EBFE",
          200: "#B6D8F8",
          300: "#8EC2F0",
          400: "#66A9E8",
          500: "#4A8DD8",
          600: "#145DA1",
          700: "#12518F",
          800: "#10427A",
          900: "#0e3466",
        },
      },
      borderRadius: {
        "4xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 12px 28px rgba(20, 93, 161, 0.14)",
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
          "linear-gradient(120deg, rgba(251, 247, 242, 0.92), rgba(20, 93, 161, 0.09), rgba(20, 93, 161, 0.17))",
      },
    },
  },
  plugins: [],
};

export default config;
