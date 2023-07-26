import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Menu = styled(C.Menu)``

export const MenuButton = styled(C.MenuButton)`
  position: relative;

  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;

  background-color: transparent;

  @media (max-width: 767px) {
    right: 1rem;
    position: absolute;
  }
`

export const MenuList = styled(C.MenuList)``

export const MenuGroup = styled(C.MenuGroup)`
  color: #4d6f80;
  font-size: 0.875rem;
  font-weight: 600;
`

export const MenuItem = styled(C.MenuItem)`
  color: #4d6f80;
  font-size: 0.875rem;
  font-weight: 400;
`

export const MenuDivider = styled(C.MenuDivider)``

export const Profile = styled(C.Flex)`
  width: auto;
  height: auto;

  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;

    @media (max-width: 767px) {
      &:nth-of-type(1) {
        display: none;
      }
    }
  }
`

export const Avatar = styled(C.Avatar)`
  width: 2.25rem;
  height: 2.25rem;

  background-color: #7f58f1;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`
