/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        zigzag: "url('/src/assets/image/zigzag.svg')",
      },
      boxShadow: {
        button: '6px 6px 0 0px #7c3aed',
        'button-hover': '4px 4px 0 0px #7c3aed',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
