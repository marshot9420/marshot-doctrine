'use server'

import { EXCEPTION } from '@/constants'
import { getSession } from '@/libs'
import { handleException } from '@/utils'

export const logoutAction = async () => {
  try {
    const session = await getSession()
    session.destroy()
  } catch (error) {
    handleException(EXCEPTION.AUTH.LOGOUT_ERROR, error)
  }
}
