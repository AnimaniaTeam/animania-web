import { forwardRef, ForwardRefRenderFunction } from 'react'

import { CheckboxProps } from '@chakra-ui/react'

import * as S from './styles'

interface ICheckbox extends CheckboxProps {
  label: string
}

const PCheckbox: ForwardRefRenderFunction<HTMLInputElement, ICheckbox> = (
  { label, ...rest },
  ref
) => {
  return (
    <S.FormControl>
      <S.Checkbox ref={ref} type={'checkbox'} {...rest}>
        {label}
      </S.Checkbox>
    </S.FormControl>
  )
}

export const Checkbox = forwardRef(PCheckbox)
