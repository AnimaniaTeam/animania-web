import { ButtonProps } from '@chakra-ui/react'

import * as S from './styles'

interface Button extends ButtonProps {
  children?: React.ReactNode
}

export function Button({ children, ...rest }: Button) {
  return <S.Button {...rest}>{children}</S.Button>
}
