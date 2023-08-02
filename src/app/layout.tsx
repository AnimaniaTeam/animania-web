import { Lato, Skranji } from 'next/font/google'

import { AppProvider } from '~/hooks'

export const metadata = {
  title: 'Animania',
}

const lato = Lato({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
})

const skranji = Skranji({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-skranji',
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${lato.variable} ${skranji.variable} scroll-smooth`}
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
