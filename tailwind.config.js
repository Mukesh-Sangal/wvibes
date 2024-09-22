/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-logo': 'rotateLogo 2s linear infinite',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      spacing: {
        30: '1.875rem',
        60: '3.75rem',
        110: '6.875rem',
      },
      colors: {
        current: 'currentColor',
        white: '#ffffff',
        clients: '#009CDE',
        heading: '#3f444a',
        text: '#5c6873',
        bannerhead: '#F5F5F5',
        red: '#C52633',
        red1: '#DE5151',
        blue: '#232c61',
        dark: '#000000',
        dark1: '#2f353b',
        light: '#0000008D',
        back: '#000000C1',
        slider: '#AF0B14',
        success: '#2563eb',
        partnerbg: '#262626',
        lightGray: '#f7f7f7',
        lightGray1: '#F4F5F7;',
        lightGray2: '#DDD',
        lightGray3: ' #C2CADB',
        formLabel: '#0000008C',
        inputborder: '#707070',
        formBg: '#F5F9FA',
        green: '#039153',
        cyan: '#23C5D2',
        darkgray: '#445454',
        menuColor: '#69727C',
        footer: '#f5f5f5',
        formText: '#555555',
        yellows: '#FBEF3C',
      },
      fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        lg: '1rem',
        xl: '1.125rem',
        '1xl': '1.5rem',
        '1-xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '3xl-1': '3.5rem',
        '4xl': '4rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    screens: {
      sml: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
