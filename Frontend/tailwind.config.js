import tailwindScrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '37': '9.25rem',
      },
      colors:{
        'netflix-red': '#e50914',
      }
    },

  },
  plugins: [tailwindScrollbarHide],
}