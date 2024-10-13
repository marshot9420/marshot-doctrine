'use client'

import clsx from 'clsx'
import React, { forwardRef } from 'react'
import type { FieldError } from 'react-hook-form'

interface InputProps {
  label: string
  name: string
  type?: string
  value?: string | number | readonly string[]
  placeholder?: string
  error?: FieldError

  className?: string

  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type = 'text', placeholder, error, className, ...rest }, ref) => {
    return (
      <div className={clsx('flex flex-col gap-2', className)}>
        <label htmlFor={name} className="text-normal text-darkGray">
          {label}
        </label>
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={clsx(
            'rounded-md border px-4 py-2 text-normal',
            error ? 'border-red' : 'border-gray-300',
            'focus:border-lightMars focus:outline-none',
          )}
          {...rest}
        />
        {error && <span className="text-small text-red">{error.message}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
