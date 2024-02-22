const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '390px',
      sm: '435px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      animation: {
        reveal: 'reveal 0.7s ease-in-out',
      },
      fontFamily: {
        mono: ['JetBrains Mono Web', ...fontFamily.mono],
        sans: ['Inter', ...fontFamily.sans],
        serif: ['Newsreader', ...fontFamily.serif],
      },
      typography: (theme) => ({
        DEFAULT: {},
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
