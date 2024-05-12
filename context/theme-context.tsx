'use client'

import React, { createContext, useContext, useEffect, useReducer } from 'react'

export const LOCAL_KEY = '_imddc-theme'
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
  type: 'setDark' | 'setLight'
}

const ThemeContext = createContext<ThemeContext | null>(null)
const ThemeDispatchContext = createContext<ThemeDispatchContext | null>(null)

function setLocalTheme(theme: Theme) {
  document.documentElement.classList.remove(Theme.light, Theme.dark)
  document.documentElement.classList.add(theme)
  localStorage.setItem(LOCAL_KEY, JSON.stringify(theme))
}

const themeReducer: React.Reducer<Theme, ThemeAction> = (theme, action) => {
  switch (action.type) {
    case 'setLight': {
      setLocalTheme(Theme.light)
      return Theme.light
    }
    case 'setDark': {
      setLocalTheme(Theme.dark)
      return Theme.dark
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, dispatch] = useReducer(themeReducer, Theme.light)

  useEffect(() => {
    let localTheme = window.localStorage.getItem(LOCAL_KEY) as Theme
    if (localTheme) {
      const isDark = JSON.parse(localTheme) === Theme.dark
      dispatch({ type: isDark ? 'setDark' : 'setLight' })
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch({ type: 'setDark' })
    } else {
      dispatch({ type: 'setLight' })
    }
  }, [theme])

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
