import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-still-teal-41010.upstash.io',
  token: process.env.REDIS_KEY!,
})
