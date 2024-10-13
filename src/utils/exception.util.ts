import type { ExceptionObject } from '@/types'

export function handleException(
  { status, message }: ExceptionObject,
  error?: string | unknown,
): void {
  const logMessage = `상태: ${status}, 메시지: ${message}`

  if (status >= 500) {
    console.error(logMessage, error || '')
  } else if (status >= 400) {
    console.log(logMessage, error || '')
  } else {
    console.log(logMessage, error || '')
  }
}

/**
 * 첫번쨰 인자로 받은 조건인 `successCondition`이 `false`일 경우 예외를 발생시킵니다.
 * (논리형이면 false, 문자열이면 empty, 숫자면 0, 객체면 null)
 * @param successCondition: boolean | string | number | object
 * @param exceptionObject: status: HttpStatus, message: string
 *
 */
export function throwExceptionOrNot(
  successCondition: boolean | string | number | object,
  exceptionObject: ExceptionObject,
): void {
  if (!successCondition) {
    handleException(exceptionObject)
    throw new Error(JSON.stringify(exceptionObject))
  }
}
