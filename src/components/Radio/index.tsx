import { forwardRef, ForwardRefRenderFunction } from 'react'

import { RadioProps } from '@chakra-ui/react'

import * as S from './styles'

interface IInput extends RadioProps {
  label?: string
}

const PInput: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { label, ...rest },
  ref
) => {
  return (
    <S.Radio ref={ref} type={'radio'} {...rest}>
      {label}
    </S.Radio>
  )
}

export const Radio = forwardRef(PInput)
