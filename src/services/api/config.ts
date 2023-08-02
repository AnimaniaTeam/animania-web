import axios from 'axios'
import { parseCookies } from 'nookies'

const { '@animania:token': token } = parseCookies()

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
