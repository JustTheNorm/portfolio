/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2.5s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    }
  },
  plugins: [],

  variants: {
    animation: ["motion-safe"]
}
}
