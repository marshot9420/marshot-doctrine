'use client'

import { useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'

import { DarkModeButton } from '@/components/buttons'
import { HamburgerIcon } from '@/components/icons'

import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'

import { headerContainerStyles, headerStyles } from './styles'

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
        className={clsx(headerStyles.base, isVisible ? headerStyles.visible : headerStyles.hidden)}
      >
        <div className={clsx(headerContainerStyles)}>
          <HamburgerIcon toggleSidebar={toggleSidebar} />
          <Logo />
          <NavBar />
          <div className="flex items-center space-x-4">
            <DarkModeButton />
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </>
  )
}

export default Header
