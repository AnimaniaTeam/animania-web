'use client'

import * as S from './styles'

export function Footer() {
  return (
    <S.Container as={'nav'}>
      <S.Wrapper>
        <S.Logo alt={'Logo Animania'} src={'/images/png/logo.png'} />
      </S.Wrapper>
    </S.Container>
  )
}
