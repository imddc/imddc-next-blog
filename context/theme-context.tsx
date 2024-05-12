'use client'

import React, { createContext, useContext, useReducer } from 'react'

const LOCAL_KEY = '_imddc-theme'
export enum Theme {
  light = 'theme-light',
  dark = 'theme-dark'
}
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
      const isDark = theme === Theme.dark

      console.log(isDark, theme)
      if (isDark) {
        document.documentElement.classList.remove(Theme.dark)
        document.documentElement.classList.add(Theme.light)
        localStorage.setItem(LOCAL_KEY, JSON.stringify(Theme.light))
        return Theme.light
      } else {
        document.documentElement.classList.remove(Theme.light)
        document.documentElement.classList.add(Theme.dark)
        localStorage.setItem(LOCAL_KEY, JSON.stringify(Theme.dark))
        return Theme.dark
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  let localTheme = localStorage.getItem(LOCAL_KEY) as Theme
  if (!localTheme) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(Theme.light))
    localTheme = Theme.light
  }
  const [theme, dispatch] = useReducer(themeReducer, localTheme)

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
