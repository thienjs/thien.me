import '~/styles/globals.css'
import '~/styles/codeblocks.css'
import '~/styles/theme.css'
import 'styles/nprogress.css'
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import Layout from '~/components/Layout/Layout'
import Progress from '~/components/ui/NProgress'
import { Providers } from '~/lib/providers' 
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import SEO from '../../next-seo.config'



import ThemeProvider from '~/context/ThemeContext';

import { MdClose } from 'react-icons/md'
import commands from '~/data/commands'

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
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <DefaultSeo {...pageSEO} />
      <ThemeProvider>
        <Providers>
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
          <Progress />
        </Providers>
      </ThemeProvider>
    </>
  )
}
