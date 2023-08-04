'use client'

import { redirect } from 'next/navigation'

import { parseCookies } from 'nookies'

export async function withSSRGuest() {
  const { '@animania:token': token } = parseCookies()

  if (token) {
    redirect('/home')
  }
}
