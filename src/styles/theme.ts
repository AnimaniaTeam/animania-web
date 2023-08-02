import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Input: {},
  },

  fonts: {
    lato: 'var(--font-lato)',
    skranji: 'var(--font-skranji)',
  },

  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
})
