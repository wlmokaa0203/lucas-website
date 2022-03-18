import React from 'react'
import Head from 'next/head'

import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  GlobalStyles,
  Button,
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../utils/theme'
import { styles, globalStyles } from '../utils/styles'
interface ILayout {
  title?: string
  description?: string
  children: React.ReactNode
}

export default function Layout({ title, description, children }: ILayout) {
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Lucas's Website` : "Lucas's Website"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {<GlobalStyles styles={globalStyles} />}
        <AppBar sx={styles.appBar} position="static">
          <Toolbar sx={styles.appToolBar}>
            <Button sx={styles.navLink}>Home</Button>
            <Button sx={styles.navLink}>BLOG</Button>
            <Button sx={styles.navLink}>ABOUT</Button>
          </Toolbar>
        </AppBar>
        <Container>{children}</Container>
      </ThemeProvider>
    </div>
  )
}
