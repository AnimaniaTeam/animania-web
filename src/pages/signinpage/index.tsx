import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from './../../components/schema/schema'

import Theme from './../../components/theme/index'
import * as C from './../../styles/pages/signinpage.styles'
import { Input, Button } from '@chakra-ui/react'

import { useState } from 'react'

import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'

interface FormData {
  password: number | string
  email: string
}

export const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Theme>
      <C.Container>
        <img src="./icon.png" alt="" />
        <form style={C.Form} onSubmit={handleSubmit(onSubmit)}>
          <C.Input>
            <Input
              autoComplete="off"
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </C.Input>
          <C.Input>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              {...register('password')}
            />
            <C.EyeIcon onClick={handleTogglePasswordVisibility}>
              {showPassword ? (
                <VisibilityOffTwoToneIcon />
              ) : (
                <VisibilityTwoToneIcon />
              )}
            </C.EyeIcon>
          </C.Input>

          <Button type="submit">Entrar</Button>
          <C.ErrorArea>
            <C.ErrorMessage>{errors.email?.message}</C.ErrorMessage>
            <C.ErrorMessage>{errors.password?.message}</C.ErrorMessage>
          </C.ErrorArea>
        </form>
      </C.Container>
    </Theme>
  )
}
