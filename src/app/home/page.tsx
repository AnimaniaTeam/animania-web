import { Nav } from '~/components/Nav'
import { Footer } from '~/components/Footer'

import * as S from './styles'

export default function Home() {
  return (
    <S.Container>
      <Nav />

      <S.Wrapper as={'main'}>
        <h1>Em construção!</h1>
      </S.Wrapper>

      <Footer />
    </S.Container>
  )
}
