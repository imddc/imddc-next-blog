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
        className="flex-center size-10 bg-gray-500/50 hover:bg-gray-400/50 rounded-md duration-300"
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
