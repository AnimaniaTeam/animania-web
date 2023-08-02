'use client'

import { useAuth } from '~/hooks/useAuth'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../Input'
import { Button } from '../Button'

import * as S from './styles'

import { SignInFormData, signInSchema } from '~/schemas/schema.signin'

export function Form() {
  const { isLoading, handleSignIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    const response = await handleSignIn(data)

    if (response.status === 400) {
      alert(response.message)
    }
  })

  return (
    <S.Form as={'form'} onSubmit={onSubmit}>
      <S.Logo alt={'Logo Animania'} src={'/images/png/logo-signin.png'} />

      <S.ContentFields>
        <Input
          keyID={'name'}
          placeholder={'Email:'}
          {...register('email')}
          isError={errors.email}
        />

        <Input
          keyID={'isPassword'}
          isPassword
          placeholder={'Senha:'}
          {...register('password')}
          isError={errors.password}
        />

        <Button type={'submit'} isDisabled={isLoading}>
          Entrar
        </Button>
      </S.ContentFields>
    </S.Form>
  )
}
