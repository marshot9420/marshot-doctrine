'use server'

import { UserRole } from '@prisma/client'
import bcryptjs from 'bcryptjs'
import type { z } from 'zod'

import { EXCEPTION } from '@/constants'
import { getSession, getUserByUsername } from '@/libs'
import { handleException, throwExceptionOrNot } from '@/utils'
import { LoginValidation } from '@/validations'

export const loginAction = async (values: z.infer<typeof LoginValidation>) => {
  const validatedFields = await LoginValidation.safeParseAsync(values)
  if (!validatedFields.success) {
    throw new Error(validatedFields.error.message)
  }

  const { username, password } = validatedFields.data as {
    username: string
    password: string
  }

  const user = await getUserByUsername(username)
  throwExceptionOrNot(user !== null, EXCEPTION.AUTH.INVALID_CREDENTIALS)

  const notNullUser = user as { password: string }

  const isPasswordMatch = await bcryptjs.compare(password, notNullUser.password)
  throwExceptionOrNot(isPasswordMatch, EXCEPTION.AUTH.INVALID_CREDENTIALS)

  const isUserMarshot = user!.role === UserRole.MARSHOT
  throwExceptionOrNot(isUserMarshot, EXCEPTION.AUTH.NOT_MARSHOT)

  try {
    const session = await getSession()
    session.id = user!.id
    session.username = user!.username
    session.role = user!.role

    await session.save()
    const plainSession = JSON.parse(JSON.stringify(session))

    return plainSession
  } catch (error) {
    handleException(EXCEPTION.AUTH.LOGIN_ERROR, error)
  }
}
