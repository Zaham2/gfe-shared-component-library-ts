import React from 'react'
import { ThemeContext } from '../lib/ThemeContext'
import { THEMES } from '../lib/constants'

const ThemeSwitchButton = () => {

    const [currentTheme, setCurrentTheme] = React.useState<string | null>(THEMES.LIGHT)
    const { theme, toggleTheme } = React.useContext(ThemeContext)

    React.useEffect(() => {
        document.body.classList.add(theme);

        return () => {
            document.body.classList.remove(theme);
        }
    }, [currentTheme])

    const handleThemeChange = (selectedTheme: string) => {
        toggleTheme(selectedTheme)
        setCurrentTheme(selectedTheme)
    }

  return (
    <button className='theme-switch-button' onClick={() => handleThemeChange(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)}>
      Toggle Theme
    </button>
  )
}

export default ThemeSwitchButton
