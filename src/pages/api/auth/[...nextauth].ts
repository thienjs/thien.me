import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import BattleNetProvider from 'next-auth/providers/battlenet'
import DiscordProvider from 'next-auth/providers/discord'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import RedditProvider from 'next-auth/providers/reddit'
import SpotifyProvider from 'next-auth/providers/spotify'
import TwitterProvider from 'next-auth/providers/twitter'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    SpotifyProvider({
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private',
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    BattleNetProvider({
      clientId: process.env.BATTLENET_CLIENT_ID,
      clientSecret: process.env.BATTLENET_CLIENT_SECRET,
      region: process.env.BATTLENET_REGION,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
  ],
})

{
  /*  DiscordProvider({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET
}) */
}
