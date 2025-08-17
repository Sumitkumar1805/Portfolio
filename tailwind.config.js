/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#22d3ee",
          600: "#06b6d4"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2, 6, 23, 0.45)"
      }
    },
  },
  plugins: [],
}
