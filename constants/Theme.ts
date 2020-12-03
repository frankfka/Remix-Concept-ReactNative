import { createTheme } from '@shopify/restyle'

const palette = {
  greenTint: '#FAFAF9',
  greenPrimary: '#008060',

  black: '#0B0B0B',
  white: '#F0F2F3',
};


const theme = createTheme({
  colors: {
    backgroundPrimary: palette.greenTint,
    backgroundContainer: palette.white,

    textPrimary: palette.black,
    textSecondary: palette.black,
    textAccent: palette.greenPrimary
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    primary: 12
  }
});

export type Theme = typeof theme;
export default theme;
