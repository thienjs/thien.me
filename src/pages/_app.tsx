import '~/styles/globals.css'
import '~/styles/codeblocks.css';

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'


import { ThemeProvider } from 'next-themes'
import { MessageProvider } from '~/lib/message'

function MyApp({ Component, pageProps }: AppProps) {
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = { ...SEO, ...pageMeta }

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...pageSEO} />
      <ThemeProvider attribute="class">
        <MessageProvider>
          <Component {...pageProps} />
        </MessageProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
