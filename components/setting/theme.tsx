import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Theme, useThemeContext } from '~/context/theme-context'

const SettingTheme = () => {
  const { themeDispatchContext, themeContext } = useThemeContext()

  function handleToggleDarkMode() {
    themeDispatchContext.dispatch({
      type: themeContext.theme === Theme.dark ? 'setLight' : 'setDark'
    })
  }

  return (
    <>
      <button
        className="flex-center size-10 rounded-md bg-gray-300/50 backdrop-blur-md dark:bg-gray-300/50"
        onClick={handleToggleDarkMode}
      >
        {themeContext.theme === Theme.dark ? (
          <FaSun size={20} />
        ) : (
          <FaMoon size={20} />
        )}
      </button>
    </>
  )
}

export default SettingTheme
