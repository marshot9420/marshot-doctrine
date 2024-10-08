import Link from 'next/link'

import clsx from 'clsx'

interface LogoProps {
  title: string
  href: string
  isSidebar?: boolean
}

const Logo = ({ title, href, isSidebar = false }: LogoProps) => {
  return (
    <div className={clsx(isSidebar ? 'text-center' : 'flex-1 hidden md:block')}>
      <Link href={href}>
        <h3
          className={clsx(
            isSidebar ? '' : 'text-darkMars dark:text-lightMars transform hidden md:block',
          )}
        >
          {title}
        </h3>
      </Link>
    </div>
  )
}

export default Logo
