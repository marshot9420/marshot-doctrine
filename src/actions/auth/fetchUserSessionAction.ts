'use server'

import { getSession } from '@/libs'

export const fetchUserSessionAction = async () => {
  const session = await getSession()

  if (!session || !session.id) {
    return { user: null }
  }

  const plainSession = { id: session.id, username: session.username, role: session.role }

  return {
    user: plainSession,
  }
}
