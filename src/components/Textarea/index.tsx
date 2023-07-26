import { forwardRef, ForwardRefRenderFunction } from 'react'

import { TextareaProps } from '@chakra-ui/react'

import * as S from './styles'

interface ITextarea extends TextareaProps {
  label?: string
}

const PTextarea: ForwardRefRenderFunction<HTMLTextAreaElement, ITextarea> = (
  { label, ...rest },
  ref
) => {
  return (
    <S.FormControl>
      {label && <S.FormLabel>{label}</S.FormLabel>}

      <S.Textarea ref={ref} type={'textarea'} {...rest} />
    </S.FormControl>
  )
}

export const Textarea = forwardRef(PTextarea)
