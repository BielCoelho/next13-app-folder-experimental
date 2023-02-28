/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{tsx,ts,js,jsx}", "./components/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
};
