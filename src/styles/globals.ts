import { extendTheme } from '@chakra-ui/react'
import { Skranji, Lato } from 'next/font/google'

const skranjiFont = Skranji({ weight: ['400', '700'], subsets: ['latin'] })
const latoFont = Lato({ weight: ['400', '700'], subsets: ['latin'] })

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#ffffff',
      },
    }),
  },
  fonts: {
    heading: skranjiFont.style.fontFamily,
    body: latoFont.style.fontFamily,
  },
})
