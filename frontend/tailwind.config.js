/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "keyframes": {
        "shimmer": {
          "100%": {
            "transform": "translateX(100%)",
          },
        },
      },
    fontFamily: {
        grandHotel: ["Grand Hotel", "cursive"],
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}