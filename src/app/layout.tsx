import '../styles/globals.css'

import type { Metadata } from 'next'

import { Footer, Header } from '@/components'
import { APP } from '@/constants'

export const metadata: Metadata = {
  title: APP.META.TITLE,
  description: APP.META.DESCRIPTION,
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col min-h-inherit">
          <Header />
          <main className="mt-[5.6rem] flex grow flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
