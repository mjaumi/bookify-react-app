module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bookify-base': '#d63e3e',
        'bookify-base-light': '#f87676',
        'bookify-light': '#ffb0b0',
        'bookify-light-gray': '#eae8e4',
        'bookify-dark-gray': '#aa907e',
      },
      backgroundImage: {
        'home-bg': "url('/src/images/home-bg.jpg')",
      },
      gridTemplateRows: {
        'book-card': '1fr 0.25fr auto',
      }
    },
  },
  plugins: [],
}
