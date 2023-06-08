import { GetServerSidePropsContext } from 'next'

import axios from 'axios'
import { parseCookies } from 'nookies'

export function setupAPIClient(ctx?: GetServerSidePropsContext) {
  const cookies = parseCookies(ctx)

  const { 'animania.token': token } = cookies

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return api
}
