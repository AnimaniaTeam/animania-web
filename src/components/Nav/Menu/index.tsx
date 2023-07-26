import { Link } from 'react-router-dom'

import { useAuth } from '~/hooks/useAuth'

import {
  FaUser,
  FaUserCog,
  FaUserTie,
  FaUserLock,
  FaThumbsUp,
  FaDoorOpen
} from 'react-icons/fa'

import * as C from '@chakra-ui/react'
import * as S from './styles'

export function Menu() {
  const { user, handleSignOut } = useAuth()

  return (
    <S.Menu>
      <S.MenuButton>
        <S.Profile>
          <C.Text as={'span'} noOfLines={1}>
            {user?.name}
          </C.Text>

          <S.Avatar
            alt={user?.name}
            src={user?.photo || ''}
            icon={<FaUser size={14} />}
          />
        </S.Profile>
      </S.MenuButton>

      <S.MenuList>
        <S.MenuGroup title="Conta">
          <S.MenuItem as={Link} to={'/perfil'} icon={<FaUserCog size={14} />}>
            Perfil
          </S.MenuItem>

          <S.MenuItem
            as={Link}
            to={'/minhas-candidaturas'}
            icon={<FaUserTie size={14} />}
          >
            Minhas candidaturas
          </S.MenuItem>

          <S.MenuItem
            as={Link}
            to={'/minhas-convocacoes'}
            icon={<FaThumbsUp size={14} />}
          >
            Minhas convocações
          </S.MenuItem>
        </S.MenuGroup>

        <S.MenuGroup title="Gerenciar">
          <S.MenuItem as={Link} to={'/acesso'} icon={<FaUserLock size={14} />}>
            Acesso
          </S.MenuItem>
        </S.MenuGroup>

        <S.MenuDivider />

        <S.MenuItem icon={<FaDoorOpen size={14} />} onClick={handleSignOut}>
          Sair
        </S.MenuItem>
      </S.MenuList>
    </S.Menu>
  )
}
