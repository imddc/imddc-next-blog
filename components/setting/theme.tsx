import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useThemeContext } from '~/context/theme-context'

const SettingTheme = () => {
  const { themeDispatchContext, themeContext } = useThemeContext()

  function handleToggleDarkMode() {
    themeDispatchContext.dispatch({
      type: 'toggle'
    })
  }

  return (
    <>
      <button
        className="flex-center size-10 bg-gray-500/50 hover:bg-gray-400/50 rounded-md duration-300"
        onClick={handleToggleDarkMode}
      >
        {themeContext.theme === 'dark' ? (
          <FaSun size={20} />
        ) : (
          <FaMoon size={20} />
        )}
      </button>
    </>
  )
}

export default SettingTheme
