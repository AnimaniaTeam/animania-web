import { ReactNode, createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { setCookie, destroyCookie, parseCookies } from 'nookies'

import { api } from '~/services/api/config'

interface SignIn {
  email: string
  password: string
}

interface IUser {
  id: number
  email: string
  token: string
}

interface AuthContextDataProps {
  isLoading: boolean
  user: IUser | null

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
  const router = useRouter()

  const { '@animania:id': id } = parseCookies()
  const { '@animania:token': token } = parseCookies()

  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<IUser | null>(null)

  async function handleSignIn(
    data: SignIn,
  ): Promise<{ status: number; message: string }> {
    setIsLoading(true)

    const response = await api
      .post('/sessions', data)
      .then(async (res) => {
        setUser(res.data)

        setCookie(null, '@animania:id', res.data.id, {
          maxAge: 7 * 24 * 60 * 60,
        })

        setCookie(null, '@animania:token', res.data.token, {
          maxAge: 7 * 24 * 60 * 60,
        })

        router.push('/home')

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
    router.push('/')

    destroyCookie(null, '@animania:user')
    destroyCookie(null, '@animania:token')

    setUser(null)
  }

  useEffect(() => {
    setIsLoading(false)

    if (token && id) {
      api
        .get(`/admin/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.props)
        })
        .catch(() => {
          handleSignOut()
        })
    }
  }, [id, token])

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
