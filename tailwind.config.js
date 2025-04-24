/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'amiri': ['Amiri', 'serif'],
        'aref': ['Aref Ruqaa', 'serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8f6f1',
          100: '#f0ece2',
          200: '#e1d8c6',
          300: '#d0bd9f',
          400: '#c0a379',
          500: '#b4906a',
          600: '#a67a5d',
          700: '#8a614d',
          800: '#724f44',
          900: '#5f413a',
          950: '#332219',
        },
        secondary: {
          50: '#f6f8f8',
          100: '#e2ecee',
          200: '#c4d8db',
          300: '#9cbbc0',
          400: '#6e969f',
          500: '#517a85',
          600: '#446270',
          700: '#3b5160',
          800: '#354453',
          900: '#303b47',
          950: '#1c242e',
        },
        accent: {
          50: '#fef2f2',
          100: '#fde6e6',
          200: '#fad0d1',
          300: '#f7acae',
          400: '#f27b7e',
          500: '#e94e52',
          600: '#d92f33',
          700: '#b71f24',
          800: '#981e22',
          900: '#7d1f22',
          950: '#440b0d',
        },
      },
      backgroundImage: {
        'paper-texture': "url('https://images.pexels.com/photos/7097459/pexels-photo-7097459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};
