
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0A0F1C",
        card: "#111827",
        accent: "#D4AF37"
      }
    },
  },
  plugins: [],
}
