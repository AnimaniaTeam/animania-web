import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAuth } from '~/hooks/auth'
import { withSSRGuest } from '~/utils/withSSRGuest'

import { Flex, Image } from '@chakra-ui/react'

import { Input } from '~/components/InputSignIn'
import { Button } from '~/components/ButtonSignIn'

import { authSchema, SignInFormData } from '~/schemas/SignIn'

export default function Login() {
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(authSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    await signIn(data)
  })

  return (
    <Flex
      h={'100%'}
      w={'100%'}
      minH={'100vh'}
      padding={'2rem'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex
        h={'auto'}
        w={'100%'}
        maxW={'20rem'}
        gap={'2rem'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Image
          alt={'Logo'}
          src={'/images/png/logo-signin.png'}
          h={'auto'}
          w={'100%'}
          maxW={'15rem'}
        />

        <Flex
          as={'form'}
          onSubmit={onSubmit}
          h={'auto'}
          w={'100%'}
          gap={'1rem'}
          alignItems={'center'}
          flexDirection={'column'}
        >
          <Input
            type="text"
            placeholder="Email:"
            {...register('email')}
            error={errors.email}
          />

          <Input
            type="password"
            placeholder="Senha:"
            {...register('password')}
            error={errors.password}
          />

          <Button title="Entrar" type="submit" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  }
})
