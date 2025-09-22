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

        // 🌟 Full Tailwind Yellow Palette
        yellow: {
          50: "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
          950: "#422006",
        },

        // 🌟 Full Tailwind Amber Palette
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },

        // 🌟 Custom Gold Palette (extra rich yellows)
        goldShades: {
          50: "#f7faa1",
          100: "#e5f628",
          200: "#c9d728",
          300: "#aeba27",
          400: "#939d25",
          500: "#798122",
          600: "#60661f",
          700: "#484c1a",
          800: "#323415",
          900: "#1d1d0e",
          950: "#121207",
        },
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
