/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Georgia', 'serif'], // Ensure this is defined
      },
      fontSize: {
        '9xl': '8rem', // Ensure this size is defined
      },
    },
  },
  plugins: [],
};