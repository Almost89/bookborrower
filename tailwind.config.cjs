/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        vcdarkgreen: '#006F35',
        vclightgreen: '#86BC25',
        bbjunebud: '#BAD848',
        bbgreenyellow: '#D4E659',
        bbyellow: '#EEF36A',
        bblightyellow: '#F0F478',
      },
      fontFamily: {
        vcpoppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            transform: 'translate3d(-50%, 0, 0)',
          },
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
    },
  },
  plugins: [],
};
