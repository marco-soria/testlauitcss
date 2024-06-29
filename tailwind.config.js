/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'model3': "url('Model3.avif')",
        'modely': "url('ModelY.avif')",
      }
    },
  },
  plugins: [],
}


