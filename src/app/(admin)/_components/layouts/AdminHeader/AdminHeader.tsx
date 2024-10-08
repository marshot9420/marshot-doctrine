'use client'

import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'

import { DarkModeButton, HamburgerIcon, Logo, Sidebar } from '@/components'
import { URLS } from '@/constants'

import { AdminNavBar } from './AdminNavBar'
import { UserMenu } from './UserMenu'

const AdminHeader = () => {
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
          <Logo title="관리자 페이지" href={URLS.ADMIN.HOME} />
          <UserMenu />
          <div className="flex items-center space-x-4">
            <DarkModeButton />
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar}>
        <UserMenu isSidebar={true} />
        <AdminNavBar isSidebar={true} />
      </Sidebar>
    </>
  )
}

export default AdminHeader
