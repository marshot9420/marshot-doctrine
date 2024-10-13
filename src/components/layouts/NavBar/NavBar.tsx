import Link from 'next/link'

import clsx from 'clsx'

import { URLS } from '@/constants'

interface NavBarProps {
  isSidebar?: boolean
}

const NavBar = ({ isSidebar = false }: NavBarProps) => {
  return (
    <nav className={clsx(isSidebar ? 'w-full mt-8' : 'hidden md:flex')}>
      <ul
        className={clsx(
          isSidebar ? 'flex flex-col space-y-4 w-full items-center' : 'flex items-center space-x-4',
        )}
      >
        {Object.entries(URLS.CLIENT)
          .filter(([key]) => key !== 'HOME' && key !== 'LOGIN')
          .map(([key, value]) => (
            <li
              key={key}
              className={clsx(
                isSidebar
                  ? 'flex justify-center items-center w-full rounded-lg h-16 cursor-pointer hover:bg-darkMarsHover dark:hover:bg-lightMarsHover hover:text-white dark:hover:text-black'
                  : 'hover:underline hover:text-darkMarsHover dark:hover:text-lightMarsHover',
              )}
            >
              <Link href={value}>{key.charAt(0) + key.slice(1).toLowerCase()}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default NavBar
