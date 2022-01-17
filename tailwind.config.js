const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');



  module.exports = {
    content: [
      './src/**/**/*.{js,ts,jsx,tsx,html,mdx}',
      './src/**/*.{js,ts,jsx,tsx,html,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {

        fontFamily: {
          mono: ['JetBrains Mono Web', ...fontFamily.mono],
          sans: ['IBM Plex Sans', ...fontFamily.sans],
        },
        typography: (theme) => ({
          DEFAULT: {

          },

        }),
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
