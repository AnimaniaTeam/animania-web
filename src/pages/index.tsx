import { withSSRAuth } from '~/utils/withSSRAuth'

import { Navbar } from '~/components/Navbar'

import { Flex } from '@chakra-ui/react'
import { Main } from '~/components/Main'

export default function Home() {
  return (
    <Flex direction="column">
      <Navbar />
      <Main />
    </Flex>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
