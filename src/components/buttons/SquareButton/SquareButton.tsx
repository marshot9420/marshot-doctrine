import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariantType = 'normal' | 'reverse' | 'outline' | 'primary-outline' | 'error-outline'

type ButtonSizeType = 'xsmall' | 'small' | 'normal'

interface ISquareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType
  size?: ButtonSizeType
  wide?: boolean
  active?: boolean

  children: ReactNode
}

const SquareButton = ({
  variant = 'normal',
  size = 'normal',
  wide,
  active,
  disabled,
  children,
  ...rest
}: ISquareButtonProps): React.ReactElement => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center px-2 text-center text-2xl transition', // 공통 클래스

        // 크기 클래스
        size === 'normal' && 'h-16 text-normal',
        size === 'small' && 'h-10 text-small',
        size === 'xsmall' && 'h-7 text-xsmall',

        // 넓이 클래스
        wide && 'w-full',

        // 변형 클래스
        variant === 'normal' &&
          'border-darkMars bg-darkMars text-white dark:border-lightMars dark:bg-lightMars dark:text-darkMarsHover dark:hover:bg-darkMarsHover dark:hover:text-lightMars',
        variant === 'reverse' && 'border-white bg-white text-black',
        variant === 'outline' && 'border-gray-300 bg-white text-black',
        variant === 'primary-outline' && 'border-blue-500 text-blue-500 bg-white',
        variant === 'error-outline' && 'border-red-500 text-red-500 bg-white',

        // 활성화 상태 클래스
        active &&
          variant === 'normal' &&
          'hover:border-gray-800 hover:bg-gray-800 active:bg-gray-700',
        active &&
          variant === 'reverse' &&
          'hover:border-gray-200 hover:bg-gray-200 active:bg-gray-300',
        active &&
          variant === 'outline' &&
          'hover:border-gray-400 hover:bg-gray-100 active:bg-gray-200',
        active &&
          variant === 'primary-outline' &&
          'hover:border-blue-600 hover:bg-blue-100 active:bg-blue-200',
        active &&
          variant === 'error-outline' &&
          'hover:border-red-600 hover:bg-red-100 active:bg-red-200',

        // 비활성화 상태 클래스
        disabled && 'cursor-not-allowed border-gray-300 bg-gray-300 text-white',

        // 기본 hover 클래스
        'transition-colors hover:bg-lightMars hover:text-darkMarsHover',
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default SquareButton
