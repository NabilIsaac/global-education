module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        22: '5.59rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        100: '29rem'
      },
      fontFamily: {
        light: ['Myriadpro Light'],
        regular: ['Myriadpro Regular'],
        bold: ['Myriadpro Bold']

      },
      height: {
        hero: '500px',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        68: '17rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        146: '38rem',
        148: '41rem',
        150: '50rem',
      },
      width: {
        28: '7rem',
        c_large: '1200px',
        38: '10rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        68: '17rem',
        72: '18rem',
        80: '20rem',
        82: '23rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        146: '38rem',
        150: '50rem',
        180: '180rem',
        'flex-half': 'calc((100%/2) - 15px)',
        'flex-fourth': 'calc((100% / 4) - 20px)'
      },
      backgroundImage: (theme) => ({
        header: "url('/img/header.png')",
        // header: "url('/img/header-sm.png')",
        graduation: "url('/img/graduation.jpg')",
        pencil: "url('/img/mask-group.png')",
        faq: "url('/img/faq.png')"
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        primary: '#00023B'
      }),
      colors: {
        'international-orange': {
          DEFAULT: '#FE4F01',
          50: '#FFEDE6',
          100: '#FFDCCC',
          200: '#FFB999',
          300: '#FE9567',
          400: '#FE7234',
          500: '#FE4F01',
          600: '#CB3F01',
          700: '#982F01',
          800: '#662000',
          900: '#331000'
        },
        finlandia: {
          DEFAULT: '#526552',
          50: '#C9D3C9',
          100: '#BBC8BB',
          200: '#9FB19F',
          300: '#839A83',
          400: '#698169',
          500: '#526552',
          600: '#3B493B',
          700: '#242D24',
          800: '#0D110D',
          900: '#000000'
        },
        'aero-blue': {
          DEFAULT: '#B3FFE8',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#E6FFF7',
          500: '#B3FFE8',
          600: '#80FFD9',
          700: '#4DFFC9',
          800: '#1AFFBA',
          900: '#00E6A0'
        },
        'surf-crest': {
          DEFAULT: '#D0E2CF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#EFF5EF',
          500: '#D0E2CF',
          600: '#B1CFAF',
          700: '#92BC8F',
          800: '#73A870',
          900: '#598F56'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
