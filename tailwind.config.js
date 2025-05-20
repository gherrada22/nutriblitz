/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF6F1',
          100: '#F0E6D9',
          200: '#E1CDB3',
          300: '#D2B48C',
          400: '#C3A06A',
          500: '#B38C48',
          600: '#8C6D39',
          700: '#664F2A',
          800: '#3F301B',
          900: '#19120A',
        },
        green: {
          50: '#F2F9ED',
          100: '#E5F3DB',
          200: '#CBE7B7',
          300: '#B2DB93',
          400: '#98CF6F',
          500: '#7EC34B',
          600: '#649C3C',
          700: '#4A742D',
          800: '#314B1E',
          900: '#19230F',
        },
        yellow: {
          50: '#FFFDE7',
          100: '#FFFBCF',
          200: '#FFF7A0',
          300: '#FFF370',
          400: '#FFEF40',
          500: '#FFEB11',
          600: '#CCBC0D',
          700: '#998D0A',
          800: '#665E07',
          900: '#332F03',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(brown|green|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(brown|green|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /ring-(brown|green|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
};