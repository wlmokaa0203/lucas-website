import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React, { useState, FC, useContext } from 'react'
import * as themes from '../../utils/themes'

interface IThemeContext {
  colorMode: string | null
  setColorMode?: React.Dispatch<React.SetStateAction<string | null>>
}

const defaultState = {
  colorMode: null,
}

const ThemeContext = React.createContext<IThemeContext>(defaultState)

const colorModePersisted = 'light'

export const ThemeProvider: FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<string | null>(colorModePersisted)

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      <MuiThemeProvider
        theme={colorMode == 'dark' ? themes.dark : themes.light}
      >
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export const useThemeContext = () => useContext(ThemeContext)
