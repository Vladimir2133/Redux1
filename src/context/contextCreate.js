import React from 'react'

import { constThemes } from 'context/constContext'

const ThemeContext = React.createContext(constThemes.LIGHT)

const SquareContext = React.createContext(0)

export {ThemeContext , SquareContext}
