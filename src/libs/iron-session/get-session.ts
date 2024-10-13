'use server'

import { cookies } from 'next/headers'

import type { UserRole } from '@prisma/client'
import { getIronSession } from 'iron-session'

interface SessionContent {
  id?: number
  username?: string
  role?: UserRole
}

export default async function getSession() {
  const session = await getIronSession<SessionContent>(cookies(), {
    cookieName: 'marshot-doctrine-session',
    password: process.env.COOKIE_PASSWORD!,
  })

  return session
}
