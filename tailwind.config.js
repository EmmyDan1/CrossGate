/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#876e4B",
        secondary: "#f4e9dc",
        tertiary: "#4e3629",
        lightbrown: "#f9f5f0",
        whitte: "#ffffff",
        gold: "#d6bb9c",
        grayWhite: "#f9f9f9",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        libre: ['"Libre Baskerville"', "serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
