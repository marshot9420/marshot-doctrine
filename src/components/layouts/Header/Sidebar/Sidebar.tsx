'use client'

import { useEffect, useRef } from 'react'

import clsx from 'clsx'

import { Logo } from '../Logo'
import { NavBar } from '../NavBar'

import { containerStyles, sidebarStyles } from './styles'

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
      className={clsx(sidebarStyles.base, isOpen ? sidebarStyles.open : sidebarStyles.closed)}
    >
      <div className={clsx(containerStyles)}>
        <Logo isSidebar={true} />
        <NavBar isSidebar={true} />
      </div>
    </div>
  )
}

export default Sidebar
