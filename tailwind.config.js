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
        colors: {
          emerald: colors.emerald,
          fuchsia: colors.fuchsia,
          'th-background': 'var(--background)',
          'th-background-secondary': 'var(--background-secondary)',
          'th-foreground': 'var(--foreground)',
          'th-primary-dark': 'var(--primary-dark)',
          'th-primary-medium': 'var(--primary-medium)',
          'th-primary-light': 'var(--primary-light)',
          'th-accent-dark': 'var(--accent-dark)',
          'th-accent-medium': 'var(--accent-medium)',
          'th-accent-light': 'var(--accent-light)',
        },
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
