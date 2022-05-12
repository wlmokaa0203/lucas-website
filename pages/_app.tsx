import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import Theme from '../components/Theme'
import NavBar from '../components/NavBar'
import { globalStyles } from '../utils/styles'
import { useRouter } from 'next/router'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`)
      setIsLoading(true)
    }
    const handleStop = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <Theme>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <NavBar />
      {isLoading && <Loading />}
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Theme>
  )
}

export default MyApp
