import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import 'normalize.css'
import NavBar from '../components/NavBar'
import { globalStyles } from '../utils/styles'
import { AnimatePresence } from 'framer-motion'
import theme from '../utils/theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme.light}>
      <NavBar />
      <CssBaseline />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <GlobalStyles styles={globalStyles} />
    </ThemeProvider>
  )
}

export default MyApp
