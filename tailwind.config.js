const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      enabled: true,
      content: [
        './projects/oqudemy/src/**/*.{html,ts,css,scss,sass,less,styl}',
        './projects/ui/src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica','Arial','sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
