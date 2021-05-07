module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
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
