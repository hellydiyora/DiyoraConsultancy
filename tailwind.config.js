/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6F4E37',
          light: '#8A6D57',
          dark: '#523A29',
          extraDark: '#3B291D',
        },
        secondary: {
          DEFAULT: '#F9F5F0',
          dark: '#E8E0D5',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold accent
          light: '#E5C76B',
        },
        success: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
        },
        warning: {
          DEFAULT: '#FF9800',
          light: '#FFB74D',
        },
        error: {
          DEFAULT: '#F44336',
          light: '#E57373',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};