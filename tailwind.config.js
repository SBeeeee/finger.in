// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Rubik Puddles"', 'cursive'],
        body: ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
