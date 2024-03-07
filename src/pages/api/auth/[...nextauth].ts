import { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import RedditProvider from 'next-auth/providers/Reddit'
import SpotifyProvider from 'next-auth/providers/Spotify'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
    SpotifyProvider({
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private',
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
}

const handler = NextAuth(authOptions)
export  { handler as GET, handler as POST }

{
  /*  DiscordProvider({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET
}) 
      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID,
        clientSecret: process.env.TWITTER_CLIENT_SECRET,
        version: '2.0',
      }),
      */
}

export default handler 