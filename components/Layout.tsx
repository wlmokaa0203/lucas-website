import React from 'react'
import Head from 'next/head'
import { Container } from '@mui/material'
import { styles } from '../utils/styles'

type Props = {
  title?: string
  description?: string
  children: React.ReactNode
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
      <Container sx={styles.page}>{children}</Container>
    </div>
  )
}
