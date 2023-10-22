/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
    },
    extend: {},
  },
  plugins: [],
}