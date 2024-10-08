import '../../styles/globals.css'

import type { Metadata } from 'next'

import { Footer, Header } from '@/components'
import { APP } from '@/constants'

export const metadata: Metadata = {
  title: APP.META.TITLE,
  description: APP.META.DESCRIPTION,
}

interface BlogRootLayoutProps {
  children: React.ReactNode
}

const BlogRootLayout = ({ children }: BlogRootLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mt-[5.6rem] flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default BlogRootLayout
