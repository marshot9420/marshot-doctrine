'use client'

import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import type { z } from 'zod'

import { Input, SquareButton } from '@/components'
import { URLS } from '@/constants'
import { useUserStore } from '@/store'
import { LoginValidation } from '@/validations'

import { loginAction } from '@/actions/auth'

import { AuthForm, AuthSection } from '../_components'

type LoginFormData = z.infer<typeof LoginValidation>

const LoginPage: NextPage = () => {
  const router = useRouter()
  const setUser = useUserStore((state) => state.setUser)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginValidation),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const session = await loginAction(data)
      alert('로그인에 성공했습니다!')

      setUser({
        id: session.id,
        username: session.username,
        role: session.role,
      })

      router.push(URLS.ADMIN.HOME)
    } catch (error) {
      console.error('로그인에 실패했습니다.', error)
      alert('로그인에 실패했습니다.')
    }
  }

  return (
    <AuthSection>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
          error={errors.username}
          {...register('username', {
            required: '아이디를 입력해주세요.',
          })}
        />

        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          error={errors.password}
          {...register('password', {
            required: '비밀번호를 입력해주세요',
          })}
        />

        <SquareButton wide>로그인</SquareButton>
      </AuthForm>
    </AuthSection>
  )
}

export default LoginPage
