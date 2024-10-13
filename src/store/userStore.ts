import type { UserRole } from '@prisma/client'
import { create } from 'zustand'

interface UserInfoState {
  id: number | null
  username: string | null
  role: UserRole | null
}

interface UserInfoActions {
  setUser: (userInfo: UserInfoState) => void
  clearUser: () => void
}

export const useUserStore = create<UserInfoState & UserInfoActions>((set) => ({
  id: null,
  username: null,
  role: null,
  setUser: ({ id, username, role }) => set({ id, username, role }),
  clearUser: () => set({ id: null, username: null, role: null }),
}))
