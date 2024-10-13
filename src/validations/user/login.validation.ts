import { z } from 'zod'

export const LoginValidation = z.object({
  username: z.string().toLowerCase().trim(),
  password: z.string(),
})
