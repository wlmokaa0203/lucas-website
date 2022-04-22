import {
  Card,
  Container,
  Typography,
  Button,
  ListItem,
  List,
  Box,
  styled,
} from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { color, styles } from '../utils/styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required()
    .label('Name'),
  email: yup.string().email().required().label('Email'),
  message: yup.string().required().label('Message'),
})

type FormData = {
  name: string
  email: string
  message: string
}

const Input = styled('input')({
  padding: 8,
  width: '100%',
})

const ContactScreen: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(contactFormSchema),
    reValidateMode: 'onSubmit',
  })
  const onSubmit = handleSubmit((data) => console.log(data))
  console.log(errors)

  const fieldStyle = { display: 'flex', flexDirection: 'column', flex: 1 }
  const errorStyle = { height: 12, fontSize: 12, color: color.error }

  return (
    <Layout title={'Contact me'}>
      <Card sx={styles.pageCard}>
        <Container sx={styles.fullpage}>
          <form
            onSubmit={onSubmit}
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            <Typography
              sx={[styles.pageTitle, { textAlign: 'center' }]}
              component={'div'}
              variant={'h5'}
            >
              Contact Me
            </Typography>
            <List>
              <ListItem>
                <Box sx={fieldStyle}>
                  <Input {...register('name')} placeholder={'Name'} />
                  <Box sx={errorStyle}>{errors && errors.name?.message}</Box>
                </Box>
                <Box sx={{ width: 10 }} />
                <Box sx={fieldStyle}>
                  <Input {...register('email')} placeholder={'Email'} />
                  <Box sx={errorStyle}>{errors && errors.email?.message}</Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box sx={[fieldStyle, { width: '100%' }]}>
                  <textarea
                    placeholder={'Leave a message'}
                    rows={10}
                    style={{ width: '100%' }}
                    {...register('message')}
                  />
                  <Box sx={errorStyle}>{errors && errors.message?.message}</Box>
                </Box>
              </ListItem>
            </List>
            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        </Container>
      </Card>
    </Layout>
  )
}

export default ContactScreen
