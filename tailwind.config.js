/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        blues: {
          100: "#0D70BC",
          200: "#88E2E8",
          300: "#569cda",
          400: "#191A1F1A",
          500: "#A2B3CE",
          600: "#48ADFB",
          700: "#59B1E6",
        },
        black: {
          50: "#000",
          100: "#191A1F",
          200: "#080809",
        },
        purple: {
          100: "#A9A3B9",
          200: "#5E6282",
          300: "#DBD8E2",
        },
      },
      screens: {
        "3xl": "1700px",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
