import Link from 'next/link'

import clsx from 'clsx'

import { APP, URLS } from '@/constants'

interface LogoProps {
  isSidebar?: boolean
}

const Logo = ({ isSidebar = false }: LogoProps) => {
  return (
    <div className={clsx(isSidebar ? 'text-center' : 'flex-1 hidden md:block')}>
      <Link href={URLS.CLIENT.HOME}>
        <h3
          className={clsx(
            isSidebar ? '' : 'text-darkMars dark:text-lightMars transform hidden md:block',
          )}
        >
          {APP.INFO.TITLE}
        </h3>
      </Link>
    </div>
  )
}

export default Logo
