import React, { useContext } from 'react'
// styles
import { Button } from 'context/contextStyle'
// context
import { ThemeContext } from 'context/contextCreate'
// constants
import { constThemes } from 'context/constContext'
import { AddSquareProvider } from 'context/contextSquareApp'


const ThemeButtons = () => {
  const { setThemeColor } = useContext(ThemeContext);

  return (
    <>
      <Button onClick={setThemeColor(constThemes.LIGHT)}>Light</Button>
      <Button onClick={setThemeColor(constThemes.DARK)}>Dark</Button>
    </>
  )
}

export { ThemeButtons }
