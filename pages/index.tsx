import { Card, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { styles } from '../utils/styles'

const Home: NextPage = () => {
  return (
    <Layout>
      <Card sx={styles.pageCard}>
        <Container sx={styles.fullpage}>
          <Typography sx={styles.pageTitle} component={'div'} variant={'h3'}>
            Welcome to My Website!
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
            I&apos;m a Web Developer from HK. This is a website I created for
            organizing my projects. And later i will update the blog mainly for
            programming learning purpose.
          </Typography>
        </Container>
      </Card>
    </Layout>
  )
}

export default Home
