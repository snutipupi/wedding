/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#606C38", // Verde kaki
        secondary: "#ffffff", // Alb pentru fundal
        accent: "#283618", // Verde kaki închis pentru accente
        selected: "#800020", // Roșu bordo pentru data selectată
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
