/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'Arial', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        animation: {
          'fade-in': 'fadeIn 1.5s ease-in-out',
          'bounce-slow': 'bounce 4s infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};

