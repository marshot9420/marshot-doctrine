import clsx from 'clsx'
import Link from 'next/link'

import { URLS } from '@/constants'

interface AdminNavBarProps {
  isSidebar?: boolean
}

const adminMenuLinks = [
  { label: '글 관리', href: URLS.ADMIN.POSTS },
  { label: '카테고리 관리', href: URLS.ADMIN.CATEGORIES },
  { label: '포트폴리오 관리', href: URLS.ADMIN.PORTFOLIOS },
  { label: '프로젝트 관리', href: URLS.ADMIN.PROJECTS },
  { label: '댓글 관리', href: URLS.ADMIN.COMMENTS },
  { label: '방문 통계', href: URLS.ADMIN.STATS },
  { label: '유입 경로', href: URLS.ADMIN.REFERRALS },
]

const AdminNavBar = ({ isSidebar = false }: AdminNavBarProps) => {
  return (
    <nav className={clsx(isSidebar ? 'w-full' : 'hidden md:flex')}>
      <ul
        className={clsx(
          isSidebar ? 'flex flex-col space-y-4 w-full items-center' : 'flex items-center space-x-4',
        )}
      >
        {adminMenuLinks.map(({ label, href }) => (
          <li
            key={label}
            className={clsx(
              isSidebar
                ? 'flex justify-center items-center w-full rounded-lg h-16 cursor-pointer hover:bg-darkMarsHover dark:hover:bg-lightMarsHover hover:text-white dark:hover:text-black'
                : 'hover:underline hover:text-darkMarsHover dark:hover:text-lightMarsHover',
            )}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AdminNavBar
