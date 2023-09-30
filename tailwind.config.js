/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        30: '1.875rem',
        60: '3.75rem',
        110: '6.875rem',
      },
      colors: {
        current: 'currentColor',
        white: '#ffffff',
        heading: '#3f444a',
        text: '#5c6873',
        bannerhead: '#F5F5F5',
        red: '#C52633',
        red1: '#DE5151',
        blue: '#00598E',
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
      },
      fontSize: {
        sm: '0.938rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '1xl': '1.375rem',
        '1-xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
        '5xl': '3.5rem',
        '6xl': '4rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem',
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
  plugins: [],
}
