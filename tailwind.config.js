/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.css', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        secondary: '#2F2F2F',
        tertiary: '#3F3F3F',
        quaternary: '#4F4F4F',
        quinary: '#5F5F5F',
        senary: '#6F6F6F',
        septenary: '#7F7F7F',
      },
    },
  },
  plugins: [],
}
