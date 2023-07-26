import * as C from '@chakra-ui/react'
import * as S from './styles'

import { AiOutlineMenu } from 'react-icons/ai'

export function Drawer() {
  const { isOpen, onOpen, onClose } = C.useDisclosure()

  return (
    <>
      <S.Button colorScheme="teal" onClick={onOpen}>
        <AiOutlineMenu size={24} />
      </S.Button>

      <S.Drawer placement={'left'} isOpen={isOpen} onClose={onClose}>
        <S.DrawerOverlay />

        <S.DrawerContent>
          <S.DrawerCloseButton />

          <S.DrawerHeader>Create your account</S.DrawerHeader>

          <S.DrawerBody>Menu de navegação</S.DrawerBody>
        </S.DrawerContent>
      </S.Drawer>
    </>
  )
}
