import { Button, Typography, Container } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { styles } from '../utils/styles'

const AboutScreen: NextPage = () => {
  return (
    <Layout title={'About me'}>
      <Card
        sx={{
          height: 'calc(90vh - 64px)',
          overflow: 'auto',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container sx={styles.fullpage}>
          <Typography sx={styles.pageTitle} component={'div'} variant={'h5'}>
            About Me
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              marginTop: 5,
              marginBottom: 5,
            }}
            component={'div'}
            variant={'body1'}
          >
            I&apos;m a Web Developer from HK.
            <br />
            I&apos;m a Self-motivated and independent learner, always curious
            and open-minded to novel ideas.
            <br />
            I&apos;m Flexible and willing to learn in fast paced environment.
            <br />
            I Love football, guitar and photography.
            <br />
          </Typography>
          <Button variant="contained">Contact me</Button>
        </Container>
      </Card>
    </Layout>
  )
}

export default AboutScreen
