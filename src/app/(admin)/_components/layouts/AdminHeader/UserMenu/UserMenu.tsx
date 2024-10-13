'use client'

import { useRouter } from 'next/navigation'

import { UserRole } from '@prisma/client'
import clsx from 'clsx'
import { useCallback } from 'react'

import { TransparentButton } from '@/components'
import { URLS } from '@/constants'
import { useUserStore } from '@/store'

import { logoutAction } from '@/actions/auth'

interface UserMenuProps {
  isSidebar?: boolean

  active?: boolean
}

const UserMenu = ({ isSidebar = false, active = false }: UserMenuProps) => {
  const { username, role, clearUser } = useUserStore()
  const router = useRouter()

  const handleLogout = useCallback(async () => {
    await logoutAction()
    clearUser()
    router.push(URLS.CLIENT.HOME)
  }, [clearUser, router])

  return (
    <ul
      className={clsx(
        isSidebar
          ? 'flex w-full flex-col items-center space-y-4 my-8'
          : 'hidden items-center space-x-4 md:flex md:w-144 md:justify-end',
      )}
    >
      <TransparentButton href={URLS.CLIENT.HOME} label="블로그" active={active} />
      {username ? (
        <>
          {role === UserRole.MARSHOT && (
            <TransparentButton href={URLS.ADMIN.HOME} label="관리자" active={active} />
          )}
          <TransparentButton onClick={handleLogout} label="로그아웃" active={active} />
        </>
      ) : (
        <TransparentButton href={URLS.ADMIN.LOGIN} label="로그인" active={active} />
      )}
    </ul>
  )
}

export default UserMenu
