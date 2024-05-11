'use client'

import React, { createContext, useContext, useReducer } from 'react'

type Theme = 'light' | 'dark'
type ThemeContext = {
  theme: Theme
}
type ThemeDispatchContext = {
  dispatch: React.Dispatch<ThemeAction>
}
type ThemeAction = {
  type: 'toggle'
}

const ThemeContext = createContext<ThemeContext | null>(null)
const ThemeDispatchContext = createContext<ThemeDispatchContext | null>(null)

const themeReducer: React.Reducer<Theme, ThemeAction> = (theme, action) => {
  switch (action.type) {
    case 'toggle': {
      const isDark = theme === 'dark'
      if (isDark) {
        document.documentElement.classList.remove('dark')
        return 'light'
      } else {
        document.documentElement.classList.add('dark')
        return 'dark'
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, dispatch] = useReducer(themeReducer, 'light')

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeDispatchContext.Provider value={{ dispatch }}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext)
  const themeDispatchContext = useContext(ThemeDispatchContext)
  if (!themeContext) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    )
  }
  if (!themeDispatchContext) {
    throw new Error(
      'useThemeDispatchContext must be used within a ThemeDispatchContextProvider'
    )
  }
  return {
    themeContext,
    themeDispatchContext
  }
}
