import { type NextRequest, NextResponse } from 'next/server'

import { URLS } from './constants'
import { getSession } from './libs'

const protectedRoutes = [
  URLS.ADMIN.HOME,
  URLS.ADMIN.POSTS,
  URLS.ADMIN.CATEGORIES,
  URLS.ADMIN.COMMENTS,
  URLS.ADMIN.PORTFOLIOS,
  URLS.ADMIN.PROJECTS,
  URLS.ADMIN.STATS,
  URLS.ADMIN.REFERRALS,
]

export async function middleware(req: NextRequest) {
  const session = await getSession()

  const url = req.nextUrl.clone()

  if (protectedRoutes.some((route) => url.pathname.startsWith(route))) {
    if (!session.id) {
      return NextResponse.redirect(new URL(URLS.CLIENT.LOGIN, req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/heyum/:path*'],
}
