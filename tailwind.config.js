/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    'src/*.js',
    '_layouts/**/*.html',
    '_includes/**/*.html',
    '*.{html,md}',
    '**/*.md',
  ],
  theme: {
    colors: {
      bg: colors.white,
      white: colors.white,
      brand: colors.pink[600],
      gray: colors.gray,
    },
    fontFamily: {
      sans: 'Inter, Helvetica, Arial, sans-serif',
      serif: 'Playfair\\ Display, PT Serif, serif',
    },
    extend: {
      animation: {
        fadeInColor: 'grayscaleToColor 500ms ease-in-out 1',
      },
      keyframes: {
        grayscaleToColor: {
          '0%': { filter: 'grayscale(100%)' },
          '100%': { filter: 'grayscale(0%)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1,h2,h3': {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: 600,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
