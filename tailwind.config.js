/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'screen-85': '85vw',
      },
      maxWidth: {
        '350': '350px',
      },
    },
  },
  plugins: [],
}

