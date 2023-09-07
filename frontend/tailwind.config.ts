import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      grey: { 1: '#939393', 2: '#383635', 3: '#101010' },
      orange: '#ff8e00',
      green: '#6fc13e',
      red: '#dc001c',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '376px',
      },
    },
  },
  plugins: [],
} satisfies Config
