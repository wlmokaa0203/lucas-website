import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import Theme from '../components/Theme'
import NavBar from '../components/NavBar'
import { globalStyles } from '../utils/styles'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Theme>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Theme>
  )
}

export default MyApp
