import React from 'react'
import { Box } from '@mui/material'
import type { NextPage } from 'next'
import PageHead from '../components/Layout'
import { styles } from '../utils/styles'

const ResumePage: NextPage = () => {
  return (
    <PageHead>
      <Box sx={styles.resume}></Box>
    </PageHead>
  )
}

export default ResumePage
