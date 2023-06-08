import { withSSRGuest } from '~/utils/withSSRGuest'

import { Flex } from '@chakra-ui/react'

export default function Login() {
  return (
    <Flex direction={'column'}>
      <h1>Olá Login!</h1>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  }
})
