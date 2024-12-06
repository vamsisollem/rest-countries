/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
<<<<<<< HEAD
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightBackground: 'var(--Very-Light-Gray)',
      light: 'var(--White)',
      lightText: 'var(--Very-Dark-text)',
      darkBackground: 'var(--Very-Dark-Blue)',
      dark: 'var(--Dark-Blue)',
    },
=======
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'lightBackground': 'var(--Very-Light-Gray)',
      'darkBackground': 'var( --Very-Dark-Blue)',
      'light': 'var( --White)',
      'dark':'var(--Very-Dark-Blue)',
      'light-elements': 'var(--White)',
      'dark-elements': 'var(--Dark-Blue)',
    }
>>>>>>> origin/main
  },
  plugins: [],
}

