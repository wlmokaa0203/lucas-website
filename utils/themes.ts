import { createTheme } from '@mui/material/styles'
import { color } from './styles'

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: color.darkGreen,
      dark: color.darkGreen,
      light: color.gray,
    },
    secondary: {
      main: color.softGray,
      dark: color.dark,
      light: color.softGray,
    },
    background: {
      default: color.softGray,
    },
    text: {
      secondary: '#FFFFFF',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    body2: {
      fontSize: 16,
      color: 'primary.dark',
    },
  },
})

export const dark = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: color.dark,
    },
  },
})
