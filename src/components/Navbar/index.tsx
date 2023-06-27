import { Flex, Image, Button, Text } from '@chakra-ui/react'
import { useAuth } from '~/hooks/auth'

export function Navbar() {
  const { signOut } = useAuth()

  return (
    <Flex
      as={'nav'}
      w={'100%'}
      h={'auto'}
      p={10}
      justifyContent={'center'}
      backgroundColor={'#424242'}
    >
      <Flex
        w={'100%'}
        maxW={'90rem'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Image alt="Logo" src="/images/png/logo.png" />

        <Flex gap={5}>
          <Button variant={'link'}>
            <Text color={'#F6AD55'} fontSize={'1.75rem'} fontWeight={'400'}>
              Vìtor Emanuel
            </Text>
          </Button>

          <Button variant={'link'} onClick={() => signOut()}>
            <Text color={'#F6AD55'} fontSize={'1.75rem'} fontWeight={'400'}>
              Sair
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
