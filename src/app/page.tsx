'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '~/components/SignIn/Input'

import * as C from '@chakra-ui/react'
import * as S from './styles'

import { SignInFormData, signInSchema } from '~/schemas/schema.signin'
import { useAuth } from '~/hooks/useAuth'
import { Button } from '~/components/SignIn/Button'

export default function SignIn() {
  const { handleSignIn } = useAuth()

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
    <S.Container>
      <S.Form onSubmit={onSubmit} autoComplete={'off'}>
        <C.Image
          alt={'Logo Animania'}
          src={'/images/png/logo-signin.png'}
          width={'full'}
          maxWidth={'15rem'}
        />

        <S.Content>
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

          <Button type={'submit'}>Entrar</Button>
        </S.Content>
      </S.Form>
    </S.Container>
  )
}
