/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jb: { black: "#0A0A0A", yellow: "#FFC107", red: "#D32F2F", gray: "#F5F5F5", darkGray: "#1A1A1A" },
      },
      fontFamily: { inter: ["Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
