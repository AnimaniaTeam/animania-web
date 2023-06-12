import Router from 'next/router'

import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from 'react'

import Cookies from 'js-cookie'
import { setCookie, parseCookies } from 'nookies'

import { api } from '~/services/api/apiClient'

type User = {
  email?: string
}

type SignInCredentials = {
  email?: string
  password?: string
}

type AuthContextData = {
  user?: User
  errorAuth?: boolean
  signOut: () => void
  loadingAuth?: boolean
  isAuthenticated: boolean
  signIn(credentials: SignInCredentials): Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  Cookies.remove('animania.token')

  Router.push('/')
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const [errorAuth, setErrorAuth] = useState<boolean>(false)
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false)

  console.log('Hm...')

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'animania.token': token } = parseCookies()
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    if (token) {
      api
        .get('/users')
        .then((response) => {
          const { email } = response.data

          setUser({
            email,
          })
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    console.log(
      '🚀 ~ file: auth.tsx:74 ~ signIn ~ email, password:',
      email,
      password,
    )

    try {
      setLoadingAuth(true)
      const response = await api.post('sessions', {
        email,
        password,
      })

      console.log('🚀 ~ file: auth.tsx:86 ~ signIn ~ response:', response)

      const { token } = response.data

      setCookie(null, 'animania.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 1 month
        path: '/',
      })

      setUser({
        email,
      })

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setErrorAuth(false)
      setLoadingAuth(false)
      Router.push('/')
    } catch (error) {
      console.log(error)
      setErrorAuth(true)
      setLoadingAuth(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, loadingAuth, user, signOut, errorAuth }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('Auth must exist to use system')
  }

  return context
}

export { AuthProvider, useAuth }
