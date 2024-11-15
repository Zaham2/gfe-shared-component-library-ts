import React from 'react'
import { ThemeContext } from './ThemeContext'
import { THEMES } from './constants'

interface Props {
    children: React.ReactNode
}

const ThemeProvider = (props: Props) => {

  const [theme, setTheme] = React.useState(THEMES.LIGHT)


  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider