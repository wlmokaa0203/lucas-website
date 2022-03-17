import React from 'react'
import Head from 'next/head'

import { Container, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface ILayout {
  title?: string
  description?: string
  children: React.ReactNode
}

const theme = createTheme({})

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
        <Container>{children}</Container>
      </ThemeProvider>
    </div>
  )
}
