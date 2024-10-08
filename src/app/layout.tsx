import { APP } from '@/constants'
import '../styles/globals.css'

import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
