
import { getServerSession } from "next-auth";

import GitHub from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET,

  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID as string,

      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
} satisfies NextAuthOptions;

export function auth(...args) {
  return getServerSession(...args, authOptions);
}