/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SquarePeg: ["'Square Peg', cursive;"],
      },
      colors: {
        primary: {
          main: "#64748b",
          light: "#94a3b8",
          dark: "#475569",
          contrastText: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
