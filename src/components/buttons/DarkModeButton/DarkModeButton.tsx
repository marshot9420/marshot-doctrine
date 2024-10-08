'use client'

import { useEffect, useState } from 'react'

import clsx from 'clsx'

import { DarkIcon, LightIcon } from '@/components/icons'

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('theme') === 'dark'
    setIsDarkMode(savedMode)
    document.documentElement.classList.toggle('dark', savedMode)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={clsx(
        'relative w-20 h-10 p-1 rounded-full focus:outline-none transition-colors duration-300 ml-4 bg-ebony dark:bg-white',
      )}
    >
      <div
        className={clsx(
          'p-1 absolute top-0 bottom-0 my-auto w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 bg-white dark:bg-ebony',
          isDarkMode ? 'translate-x-10' : 'translate-x-0',
        )}
      >
        {isDarkMode ? <LightIcon /> : <DarkIcon />}
      </div>
    </button>
  )
}

export default DarkModeButton
