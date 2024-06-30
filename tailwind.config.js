/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-special": ['"Playwrite DE Grund"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
}
