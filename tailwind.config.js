module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bookify-base': '#d63e3e',
        'bookify-light': '#ffb0b0',
      },
      backgroundImage: {
        'home-bg': "url('/src/images/home-bg.jpg')",
      }
    },
  },
  plugins: [],
}
