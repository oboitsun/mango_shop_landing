module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        special: '8%',
      },
      borderRadius: {
        100: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
