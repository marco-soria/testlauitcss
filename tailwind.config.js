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
        'modelx': "url('ModelX.avif')",
        'models': "url('ModelS.avif')",
        'cyberpunk': "url('cyberpunk.avif')",
        'solarpanels': "url('solarpanels.avif')",
        'solarroof': "url('solarroof.avif')",
        'powerwall': "url('powerwall.avif')",
        'accessories': "url('accessories.avif')",
      }
    },
  },
  plugins: [],
}


