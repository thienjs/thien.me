import '~/styles/globals.css'
import '~/styles/codeblocks.css';
import 'styles/nprogress.css'
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import { MessageProvider } from '~/lib/message'
import Progress from '~/components/ui/NProgress'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

import SEO from '../../next-seo.config'

import { ThemeProvider } from 'next-themes'

import { motion, AnimatePresence } from 'framer-motion'

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
      <MessageProvider>
        <SessionProvider session={session}>
          <ThemeProvider attribute="class">
            <AnimatePresence>
              <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                  pageInitial: {
                    opacity: 0,
                  },
                  pageAnimate: {
                    opacity: 1,
                  },
                  pageExit: {
                    opacity: 0,
                  },
                }}
              >
                <Component {...pageProps} />
                <Progress />
              </motion.div>
            </AnimatePresence>
          </ThemeProvider>
        </SessionProvider>
      </MessageProvider>
    </>
  )
}

