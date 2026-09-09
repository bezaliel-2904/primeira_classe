/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        creme: {
          50: '#F2E9DC',
          100: '#EEE4D5',
          200: '#E8DCCB',
          300: '#E0D1BD',
          400: '#D3C1A5',
          500: '#C5B18F',
        },
        sky: {
          50: '#F0F6FA',
          100: '#E8F0F5',
          200: '#D0E0EA',
          300: '#A8C5D6',
          400: '#8EB5CC',
          500: '#6B9BB8',
          600: '#4E7B94',
          700: '#3A6178',
          800: '#2C4A5E',
          900: '#1E3A4C',
        },
        rose: {
          50: '#FBF0EE',
          100: '#F8E8E5',
          200: '#F0D5D0',
          300: '#E8C5C0',
          400: '#D4A8A0',
          500: '#C08A80',
          600: '#A06B60',
        },
        ink: {
          900: '#2A2A2A',
          800: '#3A3A3A',
          700: '#4A4A4A',
          600: '#5A5A5A',
          500: '#6B6B6B',
          400: '#8A8A8A',
          300: '#AAAAAA',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      letterSpacing: {
        'extra-wide': '0.25em',
        'ultra-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
