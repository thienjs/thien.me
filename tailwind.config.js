/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        b: '0 4px 0',
      },
      screens: {
        xs: '400px',
        ns: '850px',
      },
      fontFamily: {
        primary: ['var(--font-family)', ...fontFamily.sans],
        mono: ['Roboto Mono', ...fontFamily.mono],
        serif: ['Newsreader', ...fontFamily.serif],
      },
      colors: {
        bg: 'rgb(var(--bg-color) / <alpha-value>)',
        font: 'rgb(var(--font-color) / <alpha-value>)',
        hl: 'rgb(var(--hl-color) / <alpha-value>)',
        fg: 'rgb(var(--fg-color) / <alpha-value>)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        blink: 'blink 1.5s infinite 1s',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee-left': 'marquee-left var(--duration, 30s) linear infinite',
        'marquee-up': 'marquee-up var(--duration, 30s) linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        tilt: 'tilt 10s infinite linear',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
