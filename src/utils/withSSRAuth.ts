import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'

import { destroyCookie, parseCookies } from 'nookies'
import { AuthTokenError } from '~/services/errors/AuthTokenError'

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>,
) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    if (!cookies['animania.token']) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }

    try {
      return await fn(ctx)
    } catch (error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(ctx, 'animania.token')

        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      } else {
        return {
          redirect: {
            destination: '/error',
            permanent: false,
          },
        }
      }
    }
  }
}
