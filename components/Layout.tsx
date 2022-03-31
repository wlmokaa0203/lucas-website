import React from 'react'
import Head from 'next/head'
import { Container } from '@mui/material'
import { styles } from '../utils/styles'
import NavBar from './NavBar'

interface Props {
  title?: string
  description?: string
  children: React.ReactNode
  hideNavBar?: boolean
}

export default function Layout({ title, description, children }: Props) {
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Lucas's Website` : "Lucas's Website"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <NavBar />
      <Container sx={styles.page}>{children}</Container>
    </div>
  )
}
