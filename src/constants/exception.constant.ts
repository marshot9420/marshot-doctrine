import { HttpStatusCode } from '@/types'

export const EXCEPTION = {
  COMMON: {
    INTERNAL_SERVER_ERROR: {
      status: HttpStatusCode.InternalServerError,
      message: '알 수 없는 서버 오류가 발생했습니다.',
    },
  },

  AUTH: {
    INVALID_CREDENTIALS: {
      status: HttpStatusCode.BadRequest,
      message: '이메일 또는 비밀번호가 일치하지 않습니다.',
    },

    NOT_MARSHOT: {
      status: HttpStatusCode.BadRequest,
      message: '너는 마샷이 아닙니다. 꺼지세요',
    },

    LOGIN_ERROR: {
      status: HttpStatusCode.InternalServerError,
      message: '로그인 중 알 수 없는 오류가 발생했습니다.',
    },

    LOGOUT_ERROR: {
      status: HttpStatusCode.InternalServerError,
      message: '로그아웃 중 알 수 없는 오류가 발생했습니다.',
    },
  },
} as const
