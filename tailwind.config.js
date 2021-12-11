const { fontFamily } = require('tailwindcss/defaultTheme')
  module.exports = {
    purge: [
      './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
      './src/**/*.{js,ts,jsx,tsx,html,mdx}',
    ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
