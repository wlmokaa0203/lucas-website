import React from 'react'
import Head from 'next/head'
import { Container } from '@mui/material'
import { styles } from '../utils/styles'
import { motion } from 'framer-motion'

type Props = {
  title?: string
  description?: string
  children: React.ReactNode
}

export default function Layout({ title, description, children }: Props) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, x: '5%' }}
      animate={{ opacity: 1, x: '0%' }}
      transition={{ duration: 0.1 }}
    >
      <Head>
        <title>
          {title ? `${title} - Lucas's Website` : "Lucas's Website"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Container sx={styles.page}>{children}</Container>
    </motion.div>
  )
}
