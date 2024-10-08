import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',

        lightGray: '#BDBDBD',

        ebony: '#282C34',

        lightMars: '#C9864F',
        lightMarsHover: '#B97A3E',

        darkMars: '#573C31',
        darkMarsHover: '#3D3126',
      },

      fontSize: {
        h1: '4.8rem',
        h2: '4rem',
        h3: '2.8rem',
        h4: '2.4rem',
        h5: '2rem',
        h6: '1.6rem',
        large: '1.8rem',
        normal: '1.6rem',
        small: '1.4rem',
        xsmall: '1.2rem',
      },

      fontWeight: {
        light: '300',
        regular: '400',
        bold: '700',
        black: '900',
      },

      letterSpacing: {
        wider: '0.1em',
        widest: '0.2em',
        extraWide: '0.5em',
      },

      height: {
        header: '5.6rem',
      },

      minHeight: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
}
export default config
