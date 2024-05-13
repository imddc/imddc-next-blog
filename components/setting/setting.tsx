'use client'

import { clsx } from 'clsx'
import React from 'react'

import SettingTheme from './theme'

const Setting = () => {
  return (
    <div
      className={clsx(
        'flex-col-center fixed bottom-4 right-4 gap-2 overflow-hidden'
      )}
    >
      <SettingTheme />
    </div>
  )
}

export default Setting
