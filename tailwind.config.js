/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'r6-blue': '#1e3a8a',
        'r6-orange': '#ea580c',
        'r6-red': '#dc2626',
        'r6-gray': '#374151',
        'r6-dark': '#111827',
        'r6-light': '#f3f4f6'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 