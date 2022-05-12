import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50vh',
        left: '50vw',
        width: '200px',
        color: 'black',
        transform: 'translate(0%, -50%)',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
