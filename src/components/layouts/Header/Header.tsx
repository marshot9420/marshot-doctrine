'use client'

import { useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'

import { URLS } from '@/constants'

import { DarkModeButton } from '@/components/buttons'
import { HamburgerIcon } from '@/components/icons'

import { Logo } from '../Logo'
import { NavBar } from '../NavBar'
import { Sidebar } from '../Sidebar'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlHeader = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(window.scrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', controlHeader)

    return () => {
      window.removeEventListener('scroll', controlHeader)
    }
  }, [controlHeader])

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <>
      <header
        className={clsx(
          'shadow-lg bg-white dark:bg-ebony h-header fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
          isVisible ? 'transform translate-y-0' : 'transform -translate-y-full',
        )}
      >
        <div className={clsx('flex justify-between items-center h-full mx-8')}>
          <HamburgerIcon toggleSidebar={toggleSidebar} />
          <Logo title="MARSHOT DOCTRINE" href={URLS.CLIENT.HOME} />
          <NavBar />
          <div className="flex items-center space-x-4">
            <DarkModeButton />
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar}>
        <NavBar isSidebar={true} />
      </Sidebar>
    </>
  )
}

export default Header
