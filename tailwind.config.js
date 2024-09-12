/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins'],
        logo: ['Pacifico'],
        write: ['Rozha One']
      },
      boxShadow: {
        'custom': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

