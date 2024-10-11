import '../../../styles/globals.css'

import type { Metadata } from 'next'

import { AdminHeader } from '../_components'

export const metadata: Metadata = {
  title: 'MARSHOT DOCTRINE',
  description: '관리자 페이지',
  robots: 'noindex, nofollow',
}

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col min-h-screen">
          <AdminHeader />
          <main className="mt-[5.6rem] flex-grow">{children}</main>
        </div>
      </body>
    </html>
  )
}

export default AdminLayout
