import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import 'normalize.css'
import { globalStyles } from '../utils/styles'
import theme from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.light}>
      <CssBaseline />
      <Component {...pageProps} />
      <GlobalStyles styles={globalStyles} />
    </ThemeProvider>
  )
}

export default MyApp
