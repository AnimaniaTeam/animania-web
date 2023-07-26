import { forwardRef, ForwardRefRenderFunction } from 'react'

import { SelectProps } from '@chakra-ui/react'

import * as S from './styles'

interface Select extends SelectProps {
  label?: string
  children?: React.ReactNode
}

const PSelect: ForwardRefRenderFunction<HTMLSelectElement, Select> = (
  { label, children, ...rest },
  ref
) => {
  return (
    <S.FormControl>
      {label && <S.FormLabel>{label}</S.FormLabel>}

      <S.Select ref={ref} {...rest}>
        {children}
      </S.Select>
    </S.FormControl>
  )
}

export const Select = forwardRef(PSelect)
