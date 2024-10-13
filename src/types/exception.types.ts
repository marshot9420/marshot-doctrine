import type { HttpStatusCode } from './http.types'

export interface ExceptionObject {
  status: HttpStatusCode
  message: string
}
