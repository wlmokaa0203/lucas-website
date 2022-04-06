import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { styles } from '../utils/styles'

const AboutScreen: NextPage = () => {
  return (
    <Layout title={'About me'}>
      <Card>
        <Typography sx={styles.pageTitle} component={'div'} variant={'h5'}>
          My Story
        </Typography>
        <Typography
          sx={{ textAlign: 'left' }}
          component={'div'}
          variant={'body1'}
        >
          I&apos;m a Web Developer from HK.
          <br />
          I&apos;m a Self-motivated and independent learner, always curious and
          open-minded to novel ideas. Flexible and willing to learn in fast
          paced environment. Love football, guitar and photography.
          <br />
        </Typography>
        <Button variant="contained">Contact me</Button>
      </Card>
    </Layout>
  )
}

export default AboutScreen
