module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
