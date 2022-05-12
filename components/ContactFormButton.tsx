import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { List, ListItem, useMediaQuery } from '@mui/material'
import { breakpoints } from '../utils/styles'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().required().label('Name'),
    email: yup.string().required().label('Email'),
    message: yup.string().required().label('Message'),
  })
  .required()

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '90vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  maxHeight: '80vh',
  p: 4,
  overflow: 'auto',
}

export default function ContactFormButton() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const matchM = useMediaQuery(breakpoints.mediaQuery.m)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const submitHandler = (data: any) => console.log('data', data)

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Contact Me
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit(submitHandler)}
            style={{ width: '100%' }}
          >
            <Typography component="h1" variant="h5">
              Contact me
            </Typography>
            <List sx={{ width: '100%' }}>
              <ListItem>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="contact-form-name"
                      label="Name"
                      error={Boolean(errors.name)}
                      helperText={errors.name ? errors.name.message : ''}
                      variant="standard"
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{ width: '100%' }}
                      {...field}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
              <ListItem>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="contact-form-email"
                      label="Email"
                      inputProps={{ type: 'email' }}
                      error={Boolean(errors.email)}
                      helperText={errors.email ? errors.email.message : ''}
                      variant="standard"
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{ width: '100%' }}
                      {...field}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
              <ListItem>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="contact-form-message"
                      label="Message"
                      multiline
                      error={Boolean(errors.message)}
                      helperText={errors.message ? errors.message.message : ''}
                      variant="standard"
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      rows={6}
                      sx={{ width: '100%' }}
                      {...field}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
              <ListItem>
                <Button type="submit" sx={{ mt: 2 }}>
                  Submit
                </Button>
              </ListItem>
            </List>
          </form>
        </Box>
      </Modal>
    </>
  )
}
