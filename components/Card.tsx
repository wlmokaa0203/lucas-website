import { Paper, styled } from '@mui/material'

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left',
  flexWrap: 'wrap',
}))

export default Card
