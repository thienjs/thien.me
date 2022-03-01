import '~/styles/globals.css'
import '~/styles/codeblocks.css'
import 'styles/nprogress.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { useEffect } from 'react'

import { Layout } from '~/components/ui'
import Progress from '~/components/ui/NProgress'

import SEO from '../../next-seo.config'

export default function App({
  Component,
  router,
  pageProps: { session, ...pageProps },
}) {
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = { ...SEO, ...pageMeta }

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...pageSEO} />
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Progress />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
