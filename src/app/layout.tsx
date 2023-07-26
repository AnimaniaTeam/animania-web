import { Roboto_Flex, Work_Sans } from 'next/font/google'

import { AppProvider } from '~/hooks'

import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/react-flicking/dist/flicking-inline.css'

import '@egjs/flicking-plugins/dist/pagination.css'
import '@egjs/flicking-plugins/dist/flicking-plugins.css'

export const metadata = {
  title: 'Animania',
}

const roboto = Roboto_Flex({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700', '900'],
})

const workSans = Work_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${workSans.variable} scroll-smooth`}
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
