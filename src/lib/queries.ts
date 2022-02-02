import { prisma } from './prisma';

export type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;
export type GuestBookAll = ThenArg<ReturnType<typeof fetchGuestbookEntries>>;

export const fetchGuestbookEntries = async () => {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updatedAt: 'desc'
    }
  });
  return entries;
};