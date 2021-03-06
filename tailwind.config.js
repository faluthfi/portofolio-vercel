module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2f3136',
        dsfont: '#b9bbbe',
        dschosen: '#393c42',
        dsbg:'#36393f',
        dshovertxt:'#dcddde',
        dshoverbg:'#33363c',
        linkd:'#0077b5',
        dsform:'#313339'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
      },
      gridTemplateRows:{
        '12':'repeat(12, minmax(0, 1fr))'
      }
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      mdlg: { max: "950px" },
      // => @media (max-width: 950px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily:{
      'roboto':'Roboto Mono,sans-serif',
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
