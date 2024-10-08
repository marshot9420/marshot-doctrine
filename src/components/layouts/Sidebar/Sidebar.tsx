'use client'

import { useEffect, useRef } from 'react'

import clsx from 'clsx'

import { URLS } from '@/constants'

import { Logo } from '../Logo'
import { NavBar } from '../NavBar'

interface SidebarProps {
  isOpen: boolean
  closeSidebar: () => void
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, closeSidebar])

  return (
    <div
      ref={sidebarRef}
      className={clsx(
        'bg-white dark:bg-ebony fixed top-0 left-0 w-96 h-full shadow-lg z-50 transform transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className={clsx('flex flex-col items-center p-4')}>
        <Logo title="MARSHOT DOCTRINE" href={URLS.CLIENT.HOME} isSidebar={true} />
        <NavBar isSidebar={true} />
      </div>
    </div>
  )
}

export default Sidebar
