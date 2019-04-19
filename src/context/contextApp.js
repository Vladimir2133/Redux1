import React, { useState } from 'react'
// other
import { ThemeContext } from 'context/contextCreate'
// constants
import { constThemes } from 'context/constContext'

function ThemeContextProvider(props) {
  const [themeColor, setThemeColor] = useState(constThemes.LIGHT)

  const changeThemeColor = newColor => () => setThemeColor(newColor)

  return (
    <ThemeContext.Provider
      value={{
        themeColor: themeColor,
        setThemeColor: changeThemeColor
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider }
