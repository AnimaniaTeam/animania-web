import { ReactNode, createContext, useState } from 'react'

import { setCookie, destroyCookie } from 'nookies'

import { api } from '~/api/config'

interface SignIn {
  email: string
  password: string
}

interface AuthContextDataProps {
  isLoading: boolean

  handleSignIn: (props: SignIn) => Promise<{ status: number; message: string }>
  handleSignOut: () => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSignIn(
    data: SignIn,
  ): Promise<{ status: number; message: string }> {
    setIsLoading(true)

    const response = await api
      .post('/sessions', data)
      .then((res) => {
        setCookie(null, '@animania:token', res.data.token, {
          maxAge: 7 * 24 * 60 * 60,
        })

        return {
          status: 200,
          message: 'Login realizado com sucesso.',
        }
      })
      .catch(() => {
        setIsLoading(false)

        return {
          status: 400,
          message: 'E-mail e/ou senha incorretos.',
        }
      })

    return response
  }

  async function handleSignOut() {
    destroyCookie(null, '@animania:token')

    window.location.href = '/'
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
