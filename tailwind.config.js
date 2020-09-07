const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    colors: {
      ...colors,
      beer: '#FFC00C',
      gray: {
        ...colors.gray,
        101: '#F6F6F6',
        401: '#F6F4F4',
        jab: '#444444',
      },
      beer2: {
        100: '#ffe499',
        200: '#ffda75',
        300: '#ffd152',
        400: '#ffc72e',
        500: '#ffbe0a',
        600: '#ebac00',
        700: '#c79200',
        800: '#a37800',
        900: '#805e00',
      },
      black: '#1E1E1E',
    },
  },
};
