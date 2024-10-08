import clsx from 'clsx'

import { URLS } from '@/constants'

import { TransparentButton } from '@/components'

interface UserMenuProps {
  isSidebar?: boolean

  active?: boolean
}

const UserMenu = ({ isSidebar = false, active = false }: UserMenuProps) => {
  return (
    <ul
      className={clsx(
        isSidebar
          ? 'flex w-full flex-col items-center space-y-4 my-8'
          : 'hidden items-center space-x-4 md:flex md:w-144 md:justify-end',
      )}
    >
      <TransparentButton href={URLS.CLIENT.HOME} label="블로그" active={active} />
      <TransparentButton href={URLS.CLIENT.LOGIN} label="로그인" active={active} />
    </ul>
  )
}

export default UserMenu
