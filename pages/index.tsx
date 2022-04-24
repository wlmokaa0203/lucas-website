import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  Grid,
  Container,
} from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import { breakpoints, color } from '../utils/styles'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import Image from 'next/image'
import ContactFormButton from '../components/ContactFormButton'
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material'

const Home: NextPage = () => {
  const matchM = useMediaQuery(breakpoints.mediaQuery.m)
  const [hideAbout, setHideAbout] = React.useState(false)
  const [hideSkills, setHideSkills] = React.useState(false)
  const [hidePorfo, setHidePorfo] = React.useState(false)

  const Title = ({
    children,
    hide,
    onClickIcon,
  }: {
    children: React.ReactNode
    hide: boolean
    onClickIcon: () => void
  }) => {
    return (
      <Typography
        variant={matchM ? 'h2' : 'h4'}
        component="h1"
        textAlign={'left'}
        gutterBottom
        sx={{
          backgroundColor: 'primary.main',
          color: 'text.secondary',
          fontWeight: '200',
          py: 1,
          display: 'flex',
        }}
      >
        {children}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          px={2}
        >
          {hide ? (
            <Box onClick={onClickIcon}>
              <ExpandLessIcon />
            </Box>
          ) : (
            <Box onClick={onClickIcon}>
              <ExpandMoreIcon />
            </Box>
          )}
        </Box>
      </Typography>
    )
  }

  const skills: Skill[] = [
    {
      title: 'Programming Languages',
      items: [
        'JavaScript / TypeScript',
        'HTML5 / CSS3 / SCSS (Sass)',
        'Python',
        'Java',
      ],
      icons: [
        '/images/icons/javascript.svg',
        '/images/icons/typescript.svg',
        '/images/icons/html5.svg',
        '/images/icons/css3.svg',
        '/images/icons/sass.svg',
        '/images/icons/python.svg',
        '/images/icons/java.svg',
        '/images/icons/psql.svg',
      ],
    },
    {
      title: 'Frontend Development',
      items: [
        'ReactJs, Next.js',
        'React Native',
        'Redux, Redux Thunk, Redux Saga',
        'Realm DB',
        'Bootsrap, MaterialUI',
      ],
      icons: [
        '/images/icons/react.svg',
        '/images/icons/next-js.svg',
        '/images/icons/react-native.svg',
        '/images/icons/redux.svg',
        '/images/icons/redux-saga.svg',
        '/images/icons/bootstrap.svg',
        '/images/icons/material-ui.svg',
      ],
    },
    {
      title: 'Backend Development',
      items: [
        'Node.js, ExpressJs (Typescript)',
        'Spring Boot',
        'Knex',
        'PostgreSQL, MongoDB',
        'Socket.io',
      ],
      icons: [
        '/images/icons/nodejs.svg',
        '/images/icons/expressjs.svg',
        '/images/icons/knexjs.svg',
        '/images/icons/psql.svg',
        '/images/icons/mongodb.svg',
        '/images/icons/realmdb.svg',
      ],
    },
    {
      title: 'DevOps Knowledges',
      items: [
        'CI/CD',
        'Nginx',
        'Docker',
        'AWS (EC2, S3, Cloudfront,Route 53, CertificateManager, IAM)',
      ],
      icons: [
        '/images/icons/docker.svg',
        '/images/icons/nginx.svg',
        '/images/icons/aws.svg',
        '/images/icons/aws-ec2.svg',
        '/images/icons/aws-s3.svg',
        '/images/icons/aws-cloudfront.svg',
        '/images/icons/aws-route-53.svg',
      ],
    },
    {
      title: 'Others',
      items: ['Git', 'Postman', 'Draw.io: ERD drawwing/ Wireframing'],
      icons: [
        '/images/icons/git.svg',
        '/images/icons/postman.svg',
        '/images/icons/draw-io.svg',
      ],
    },
  ]

  const SkillContent = ({ title, items, icons }: Skill) => {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <Typography component="h1" variant="h5" px={2}>
              {title}
            </Typography>
            <Typography component="h1" variant="body1">
              <ul>
                {items.map((skill) => (
                  <Box component={'li'} key={skill} sx={{ fontWeight: 'bold' }}>
                    {skill}
                  </Box>
                ))}
              </ul>
            </Typography>
          </Grid>
          <Grid item md={8} xs={12}>
            {icons?.map((icon) => (
              <Box key={icon} component={'span'} m={2}>
                <Image
                  alt={icon}
                  src={icon}
                  height={matchM ? 80 : 40}
                  width={matchM ? 80 : 40}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
        <Separator />
      </>
    )
  }

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            minHeight: '100vh',
            py: 4,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pt: 10,
          }}
        >
          <Typography
            sx={{ fontSize: matchM ? '5vw' : '10vw', fontWeight: 'bold' }}
            component="h1"
            textAlign={'left'}
          >
            Hi!
            <br />
            I&apos;m Lucas, <br />
          </Typography>
          <Typography
            sx={{ fontSize: matchM ? '3vw' : '7vw', fontWeight: 'bold' }}
            gutterBottom
          >
            Welcome to my Website!
          </Typography>
          <Typography
            sx={{ fontSize: matchM ? '18px' : '16px', color: 'primary.dark' }}
            component="h1"
            textAlign={'left'}
          >
            I&apos;m a Web devloper/ Frontend Developer
          </Typography>
          <Box
            sx={{
              width: '100%',
              py: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ContactFormButton />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              right: 10,
              top: '95vh',
            }}
          >
            <motion.div
              animate={{ y: '-50%' }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            >
              <KeyboardDoubleArrowDownIcon />
            </motion.div>
          </Box>
        </Box>
        <Box
          sx={{
            py: 4,
            flexDirection: 'column',
            border: '10px solid',
            borderColor: color.black,
          }}
        >
          <Title
            hide={hideAbout}
            onClickIcon={() => setHideAbout((prev) => !prev)}
          >
            About
          </Title>
          <Box
            sx={{
              fontSize: matchM ? '18px' : '16px',
              flexGrow: 1,
              height: hideAbout ? 0 : 'auto',
              overflow: 'hidden',
            }}
          >
            <Typography component={'h5'} variant={'body2'} p={2}>
              Welcome to My first personal website! I&apos;m building this web
              as a showcase for my skill and knowledge as a Web developer. As a
              developer, there are so many skills that need to pick up. <br />
              Therefore, I will also build a blog to tidy up my learnings. And
              of course, this website would be a great opportunity for practice.
            </Typography>
            <Separator />
          </Box>

          <Title
            hide={hideSkills}
            onClickIcon={() => setHideSkills((prev) => !prev)}
          >
            My Skills
          </Title>
          <Box
            sx={{
              flexGrow: 1,
              height: hideSkills ? 0 : 'auto',
              overflow: 'hidden',
            }}
          >
            {skills.map(({ title, items, icons }) => (
              <SkillContent
                key={title}
                title={title}
                items={items}
                icons={icons}
              />
            ))}
          </Box>
          <Title
            hide={hidePorfo}
            onClickIcon={() => setHidePorfo((prev) => !prev)}
          >
            My Porfolio
          </Title>
          <Box
            sx={{
              flexGrow: 1,
              height: hidePorfo ? 0 : 'auto',
              overflow: 'hidden',
            }}
          >
            <Typography component={'h5'} variant={'body2'} p={2}>
              Underdevelopment
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box>
        <Button
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <motion.div
            animate={{ y: '-50%' }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            <KeyboardDoubleArrowDownIcon sx={{ transform: 'rotate(180deg)' }} />
          </motion.div>
          back to top
        </Button>
      </Box>
    </Layout>
  )
}

export default Home

const Separator = () => {
  return (
    <Box
      sx={{ height: 5, width: '80%', backgroundColor: 'primary.main' }}
      my={2}
    />
  )
}

type Skill = {
  title: string
  items: string[]
  icons?: string[]
}
