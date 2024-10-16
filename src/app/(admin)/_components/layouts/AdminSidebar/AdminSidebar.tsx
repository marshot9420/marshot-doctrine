'use client'

import { useEffect, useRef } from 'react'

import clsx from 'clsx'

import { Logo } from '@/components'
import { URLS } from '@/constants'

interface AdminSidebarProps {
  isOpen: boolean
  children?: React.ReactNode

  closeSidebar: () => void
}

const AdminSidebar = ({ isOpen, children, closeSidebar }: AdminSidebarProps) => {
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
    <aside
      ref={sidebarRef}
      className={clsx(
        'bg-white dark:bg-ebony fixed top-0 left-0 w-96 h-full shadow-lg z-50 transform transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <div className={clsx('flex flex-col items-center p-4')}>
        <Logo title="관리자 페이지" href={URLS.CLIENT.HOME} isSidebar={true} />
        {children}
      </div>
    </aside>
  )
}

export default AdminSidebar
