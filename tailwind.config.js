/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.css', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Green: '#495E57',
        Yellow: '#F4CE14',
        Dark_Orange: '#EE9972',
        Light_Orange: '#FBDABB',
        White: '#EDEFEE',
        Black: '#333333',
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
        'Karla-regular': "'Karla', 'sans-serif', '400'",
        'Karla-medium': "'Karla', 'sans-serif', '500'",
        'Karla-bold': "'Karla', 'sans-serif', '700'",
        'Karla-extraBold': "'Karla', 'sans-serif', '800'",
        Markazi: ['Markazi Text', 'serif'],
        'Markazi-regular': "'Markazi Text', 'serif', '400'",
        'Markazi-medium': "'Markazi Text', 'serif', '500'",
      },
      fontSize: {
        title: ['64px'],
        sub_title: ['40px'],
        medium: ['18px'],
        section_title: ['20px'],
        specials: ['16px'],
        card_title: ['18px'],
        paragraph: ['16px'],
      },
    },
  },
  plugins: [],
}
