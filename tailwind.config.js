module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      colors: {
        'teal': {
          DEFAULT: '#2A7B88',
        },
        'koamaru': {
          DEFAULT: '#3D315B',
        },
        'jazzberry': {
          DEFAULT: '#991862',
        },
        'independence': {
          DEFAULT: '#425569',
        },
        'asparagus': {
          DEFAULT: '#7EA16B',
        },
        'spanish': {
          DEFAULT: '#EBBAB9',
        },
        'vermillion': {
          DEFAULT: '#CC444B',
        },
        'pastel': {
          DEFAULT: '#B0D0D3',
        },
        'apricot': {
          DEFAULT: '#FCD7AD',
        },
        'saffron': {
          DEFAULT: '#FFA630',
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
