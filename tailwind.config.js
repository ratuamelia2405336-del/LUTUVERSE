/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canopy: {
          950: '#0E2B1F',
          900: '#123524',
          800: '#16432D',
          700: '#1B5238',
          600: '#206343',
          500: '#2D7A52',
          400: '#3F9468',
          300: '#5BAE82',
          200: '#8FCBA9',
          100: '#C6E6D4',
          50: '#EDF7F1',
        },
        bark: {
          900: '#3B2A1F',
          700: '#5C4530',
          500: '#7C5C3F',
          300: '#B8957A',
        },
        sun: {
          600: '#C99214',
          500: '#E8B923',
          400: '#F4C430',
          300: '#F8D466',
        },
        clay: {
          600: '#B5512E',
          500: '#D4693F',
          400: '#E07F52',
        },
        parchment: {
          DEFAULT: '#F9F5EA',
          dim: '#F1EBD9',
          deep: '#E7DEC4',
        },
        ink: '#22291F',
      },
      fontFamily: {
        display: ['"Baloo 2"', '"Fredoka"', 'system-ui', 'sans-serif'],
        body: ['"Nunito Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        leaf: '1.75rem',
      },
      boxShadow: {
        canopy: '0 12px 32px -12px rgba(14, 43, 31, 0.35)',
        soft: '0 4px 14px -4px rgba(59, 42, 31, 0.18)',
        lift: '0 18px 40px -16px rgba(14, 43, 31, 0.45)',
      },
      backgroundImage: {
        'leaf-texture': "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0, transparent 45%)",
      },
    },
  },
  plugins: [],
}
