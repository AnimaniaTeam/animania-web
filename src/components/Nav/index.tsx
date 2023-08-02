'use client'

import { useAuth } from '~/hooks/useAuth'

import * as C from '@chakra-ui/react'
import * as S from './styles'

import { MdPerson, MdLogout } from 'react-icons/md'

export function Nav() {
  const { user, handleSignOut } = useAuth()

  return (
    <S.Container as={'nav'}>
      <S.Wrapper>
        <S.Logo alt={'Logo Animania'} src={'/images/png/logo.png'} />

        <S.Navigation>
          <S.Profile>
            <MdPerson size={24} color={'#ffffff'} />

            <C.Text as={'span'}>{user?.email}</C.Text>
          </S.Profile>

          <S.ButtonLogout onClick={handleSignOut}>
            <MdLogout size={24} color={'#ffffff'} />
          </S.ButtonLogout>
        </S.Navigation>
      </S.Wrapper>
    </S.Container>
  )
}
