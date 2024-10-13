import prisma from '../../prisma'

export const getUserByUsername = async (username: string | undefined) => {
  try {
    const user = await prisma.user.findUnique({ where: { username } })
    return user
  } catch {
    return null
  }
}
