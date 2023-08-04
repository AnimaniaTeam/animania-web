'use client'

import { redirect } from 'next/navigation'

import { parseCookies } from 'nookies'

export async function withSSRAuth() {
  const { '@animania:token': token } = parseCookies()

  if (!token) {
    redirect('/')
  }
}
