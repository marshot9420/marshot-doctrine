import Link from 'next/link'

import { APP } from '@/constants'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-10 pb-5">
      <div className="flex flex-col">
        <small>{APP.INFO.TITLE}</small>
        <small>{APP.INFO.COPYRIGHT}</small>
        <small>{APP.INFO.EMAIL}</small>
      </div>
      <div className="flex flex-col">
        <small>
          <Link href={APP.INFO.GITHUB_URL} target="_blank">
            Github
          </Link>
        </small>
        <small>
          <Link href={APP.INFO.INSTAGRAM_URL} target="_blank">
            Instagram
          </Link>
        </small>
      </div>
    </footer>
  )
}

export default Footer
