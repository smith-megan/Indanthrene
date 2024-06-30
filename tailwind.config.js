/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        special: ['"Playwrite DE Grund"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
}
