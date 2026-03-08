/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "navy-blue": "#1e293b",
        "leafy-green": "#4ade80",
        "sky-blue": "#38bdf8",
        "soft-gray": "#f8fafc",
        "border-light": "#e2e8f0",
      },
      fontFamily: {
        "sans": ["Space Grotesk", "sans-serif"]
      },
    },
  },
  plugins: [],
}
