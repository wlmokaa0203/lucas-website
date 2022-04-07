import { Stack, Typography, Container, Box } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import Card from '../components/Card'

const MySkillsScreen: NextPage = () => {
  const langSkills = [
    {
      name: 'JavaScript, Typescript',
      icons: ['/images/icons/javascript.svg', '/images/icons/typescript.svg'],
    },
    {
      name: 'HTML5, CSS3, SCSS(Sass)',
      icons: [
        '/images/icons/html5.svg',
        '/images/icons/css3.svg',
        '/images/icons/sass.svg',
      ],
    },
    { name: 'Python', icons: ['/images/icons/python.svg'] },
    { name: 'Java', icons: ['/images/icons/java.svg'] },
    { name: 'SQL (PSQL)', icons: ['/images/icons/psql.svg'] },
  ]
  const frontendSkills = [
    {
      name: 'React JS, Next.js',
      icons: ['/images/icons/react.svg', '/images/icons/next-js.svg'],
    },
    {
      name: 'React Native',
      icons: ['/images/icons/react-native.svg'],
    },
    {
      name: 'Redux, Redux Saga',
      icons: ['/images/icons/redux.svg', '/images/icons/redux-saga.svg'],
    },
    {
      name: 'Bootstrap, Material UI',
      icons: ['/images/icons/bootstrap.svg', '/images/icons/material-ui.svg'],
    },
  ]
  const backendSkills = [
    {
      name: 'Node.js (JavaScriptS/Typescript), ExpressJs',
      icons: ['/images/icons/nodejs.svg', '/images/icons/expressjs.svg'],
    },
    { name: 'Restful API' },
    { name: 'Knex', icons: ['/images/icons/knexjs.svg'] },
    {
      name: 'PostgreSQL, MongoDB, RealmDB',
      icons: [
        '/images/icons/psql.svg',
        '/images/icons/mongodb.svg',
        '/images/icons/realmdb.svg',
      ],
    },
  ]
  const devOpsSkills = [
    {
      name: 'AWS (EC2, S3, Cloudfront, Route 53...)',
      icons: [
        '/images/icons/aws.svg',
        '/images/icons/aws-ec2.svg',
        '/images/icons/aws-s3.svg',
        '/images/icons/aws-cloudfront.svg',
        '/images/icons/aws-route-53.svg',
      ],
    },
    {
      name: 'Docker',
      icons: ['/images/icons/docker.svg'],
    },
    { name: 'Nginx', icons: ['/images/icons/nginx.svg'] },
  ]
  const othersSkills = [
    { name: 'Git', icons: ['/images/icons/git.svg'] },
    { name: 'Postman', icons: ['/images/icons/postman.svg'] },
    {
      name: 'Draw.io: ERD drawwing/ Wireframing',
      icons: ['/images/icons/draw-io.svg'],
    },
  ]

  return (
    <Layout>
      <Stack sx={{ paddingBottom: 2 }} spacing={2}>
        <Card>
          <Typography component="div" variant="h6">
            PROGRAMMING LANGUAGES
          </Typography>
          <Ul>
            {langSkills.map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </Ul>
          <Container
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {langSkills.map((skills) => {
              const icons = skills.icons
              return icons?.map((icon) => (
                <Box key={icon} sx={{ margin: 1 }}>
                  <Image alt={icon} src={icon} height={60} width={60} />
                </Box>
              ))
            })}
          </Container>
        </Card>
        <Card>
          <Typography component="div" variant="h5">
            FRONTEND
          </Typography>
          <Ul>
            {frontendSkills.map((skill) => (
              <li key={skill.name}>
                <Typography component="div" variant="body2">
                  {skill.name}
                </Typography>
              </li>
            ))}
          </Ul>
          <Container
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {frontendSkills.map((skills) => {
              const icons = skills.icons
              return icons?.map((icon) => (
                <Box key={icon} sx={{ margin: 1 }}>
                  <Image alt={icon} src={icon} height={60} width={60} />
                </Box>
              ))
            })}
          </Container>
        </Card>
        <Card>
          <Typography component="div" variant="h5">
            BACKEND
          </Typography>
          <Ul>
            {backendSkills.map((skill) => (
              <li key={skill.name}>
                <Typography component="div" variant="body2">
                  {skill.name}
                </Typography>
              </li>
            ))}
          </Ul>
          <Container
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {backendSkills.map((skills) => {
              const icons = skills.icons
              return icons?.map((icon) => (
                <Box key={icon} sx={{ margin: 1 }}>
                  <Image alt={icon} src={icon} height={60} width={60} />
                </Box>
              ))
            })}
          </Container>
        </Card>
        <Card>
          <Typography component="div" variant="h5">
            DevOps
          </Typography>
          <Ul>
            {devOpsSkills.map((skill) => (
              <li key={skill.name}>
                <Typography component="div" variant="body2">
                  {skill.name}
                </Typography>
              </li>
            ))}
          </Ul>
          <Container
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {devOpsSkills.map((skills) => {
              const icons = skills.icons
              return icons?.map((icon) => (
                <Box key={icon} sx={{ margin: 1 }}>
                  <Image alt={icon} src={icon} height={60} width={60} />
                </Box>
              ))
            })}
          </Container>
        </Card>
        <Card>
          <Typography component="div" variant="h5">
            OTHERS
          </Typography>
          <Ul>
            {othersSkills.map((skill) => (
              <li key={skill.name}>
                <Typography component="div" variant="body2">
                  {skill.name}
                </Typography>
              </li>
            ))}
          </Ul>
          <Container
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            {othersSkills.map((skills) => {
              const icons = skills.icons
              return icons?.map((icon) => (
                <Box key={icon} sx={{ margin: 1 }}>
                  <Image alt={icon} src={icon} height={60} width={60} />
                </Box>
              ))
            })}
          </Container>
        </Card>
      </Stack>
    </Layout>
  )
}

const Ul = ({ children }: { children: React.ReactNode }) => (
  <ul
    style={{
      marginTop: 8,
      marginBottom: 8,
      paddingLeft: 16,
    }}
  >
    {children}
  </ul>
)

export default MySkillsScreen
