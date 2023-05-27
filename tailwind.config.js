/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink': '#F7C4D3',
        'baby-blue': '#AED9E0',
        'sage-green': '#BDD9B8',
        'peach': '#F49C9C',
      },
    },
  },
}

