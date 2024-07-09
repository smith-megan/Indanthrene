/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        special: ['"Quicksand"', '"sans-serif"'],
      },
      gridColumn: {
        overlap: "1 / span 7",
        underlap: "4 / -1",
      },
    },
  },
  plugins: [],
}
