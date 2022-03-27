import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, GlobalStyles, Container } from '@mui/material'

import theme from '../utils/theme'
import { globalStyles, styles } from '../utils/styles'
import NavBar from './NavBar'

interface PageProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export default function Page({ title, description, children }: PageProps) {
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Lucas's Website` : "Lucas's Website"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme.light}>
        <CssBaseline />
        <NavBar />
        <Container sx={styles.page}>{children}</Container>
        <GlobalStyles styles={globalStyles} />
      </ThemeProvider>
    </div>
  )
}
