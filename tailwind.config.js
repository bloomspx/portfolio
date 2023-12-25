/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-once': 'pulse-once 1s ease-in-out forwards'
      },
      keyframes: {
          'pulse-once': {
            '50%': { opacity:0.5 },
          }
      },
      colors:{
        'black-pearl': '#1a1b1c',
        'dark-azure': '#414345',
        'dark-coral':'#B7CECE',
        'dark-salmon':'#b85265',
        'melon':'#FFAC99',
        'salmon':'#ff9b85',
        'white':'#FFFFFF'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}

