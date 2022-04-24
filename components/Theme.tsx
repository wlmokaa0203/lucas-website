import React, { FC } from 'react'
import { ThemeProvider } from '../components/context/ThemeContext'

const Theme: FC = ({ children }) => {
  return (
    <ThemeProvider>
      {/* {<CheckColorPreference />} */}
      {children}
    </ThemeProvider>
  )
}

// const CheckColorPreference = () => {
//   const { setColorMode } = useThemeContext()
//   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

//   useEffect(() => {
//     const preferedColorMode = prefersDarkMode ? 'dark' : 'light'
//     if (setColorMode) {
//       localStorage.setItem('colorMode', preferedColorMode)
//       setColorMode(preferedColorMode)
//     }
//   }, [prefersDarkMode])

//   return null
// }

export default Theme
