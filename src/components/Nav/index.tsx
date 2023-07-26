import { Link } from 'react-router-dom'

import { Menu } from './Menu'
// import { Drawer } from './Drawer'

import * as S from './styles'

import { navigation } from '~/utils/navigation'
import { useAuth } from '~/hooks/useAuth'

export function Nav() {
  const { accessLevel } = useAuth()

  const formattedNavigation = navigation.filter(
    (item) => item.accessLevel <= accessLevel
  )

  return (
    <S.Container as={'nav'}>
      {/* <Drawer /> */}

      <S.Wrapper>
        <S.Logo alt={'Logo'} src={'/images/png/logo.png'} />
        <S.Navigation>
          {formattedNavigation.map((item) => (
            <Link key={item.id} to={item.href}>
              {item.title}
            </Link>
          ))}
        </S.Navigation>

        <Menu />
      </S.Wrapper>
    </S.Container>
  )
}
