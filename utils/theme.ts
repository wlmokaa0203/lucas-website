import { createTheme } from '@mui/material/styles'

const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#283340',
      dark: '#283340',
      light: '#7E8496',
    },
    secondary: {
      main: '#733516',
      light: '#A88C82',
      // dark: '#17252A',
      // contrastText: '#000',
    },
    background: {
      default: '#D9D9D9',
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
})

const dark = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default { light, dark }
