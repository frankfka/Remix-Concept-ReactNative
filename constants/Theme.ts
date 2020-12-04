import { createTheme } from '@shopify/restyle'

const palette = {
  greenTint: '#FAFAF9',
  greenPrimary: '#008060',

  black: '#000000',
  gray: '#8d8d8d', // TODO
  white: '#FFFFFF',
};


const theme = createTheme({
  colors: {
    accent: palette.greenPrimary,

    backgroundPrimary: palette.greenTint,
    backgroundContainer: palette.white,

    borderContainer: palette.black,
    borderAccent: palette.greenPrimary,

    textPrimary: palette.black,
    textSecondary: palette.gray,
    textAccent: palette.greenPrimary
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
  borderRadii: {
    primary: 12
  },
  textVariants: {
    defaults: {
      fontFamily: 'roboto',
      fontWeight: 'normal'
    },
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'textPrimary',
    },
    subheader: {
      fontSize: 28,
      lineHeight: 36,
      color: 'textSecondary',
    },
    body: {
      fontSize: 14,
      color: 'textPrimary',
    },
    subtext: {
      fontSize: 12,
      color: 'textSecondary',
    }
  },
  containerVariants: {
    defaults: {
      borderRadius: 'primary',
      borderWidth: 1
    },
    section: {
      backgroundColor: 'backgroundContainer',
      borderColor: 'borderContainer'
    },
    button: {
      borderColor: 'borderAccent',
    }
  }
});

export type Theme = typeof theme;
export default theme;
