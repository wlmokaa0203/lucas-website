import React from 'react'
import Head from 'next/head'
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
      initial={{ opacity: 0, x: '-20%' }}
      animate={{ opacity: 1, x: '0%' }}
      transition={{ duration: 0.2 }}
    >
      <Head>
        <title>
          {title ? `${title} - Lucas's Website` : "Lucas's Website"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <div>{children}</div>
    </motion.div>
  )
}
