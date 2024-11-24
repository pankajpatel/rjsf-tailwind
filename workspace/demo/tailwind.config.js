/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../lib/src/**/*.{js,ts,jsx,tsx}" // Include library components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
