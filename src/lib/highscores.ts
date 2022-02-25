import { prisma } from './prisma'

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
export type ScoresAll = ThenArg<ReturnType<typeof fetchHighScores>>

export const fetchHighScores = async () => {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return entries
}
