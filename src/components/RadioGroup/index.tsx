import { RadioGroupProps } from '@chakra-ui/react'

import * as C from '@chakra-ui/react'
import * as S from './styles'

interface RadioGroup extends RadioGroupProps {
  label?: string
}

export function RadioGroup({ label, children, ...rest }: RadioGroup) {
  return (
    <S.FormControl>
      {label && <S.FormLabel>{label}</S.FormLabel>}

      <S.RadioGroup {...rest}>
        <C.VStack>{children}</C.VStack>
      </S.RadioGroup>
    </S.FormControl>
  )
}
